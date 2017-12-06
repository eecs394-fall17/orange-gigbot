import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Content } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { MainPage } from '../main/main';
import { MediaObject } from '@ionic-native/media';

@IonicPage()
@Component({
  selector: 'page-self-eval',
  templateUrl: 'self-eval.html',
})
export class SelfEvalPage {

  @ViewChild(Content) content: Content;

  startedplayback:boolean;
  questionIndexes: number[];
  allRecordings: any = [];
  currFile: MediaObject = null;
  responseFiles: any[];
  state: string = 'evaluating';
  audioState: string = 'not-playing'
  currIndex: number = 0;

  audioStatus: any;

  questions_db: Observable<any[]>;
  questions_db_array: any = [];
  questions_array: any = [];
  good_responses_array: any = [];
  scores: number[] = [];
  finalGrade: string;

  questionText: string = 'QUESTION TEXT';
  attribute1: string = "1st good attribute";
  attribute2: string = "2nd good attribute";
  attribute3: string = "3rd good attribute";

  attribute1Score: number;
  attribute2Score: number;
  attribute3Score: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, db:AngularFireDatabase, public alertCtrl: AlertController) {
    this.questionIndexes = this.navParams.get('questionIndexes');
    this.responseFiles = this.navParams.get('responseFiles');
    this.questions_db = db.list("/Question-database").valueChanges();
    this.questions_db.subscribe(questions_db => {
      this.questions_db_array = questions_db;
      this.questions_array = this.questions_db_array.map(q => q.Question);
      this.good_responses_array = this.questions_db_array.map(q => q.GoodResponseAttributes);
      this.setData();
    });
    setInterval(() =>{
      this.checkAudio();
    }, 1000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelfEval');
  }

  playFile() {
    try {
      if (this.currFile != null) {
        this.currFile.play();
      } else if (this.currIndex < this.responseFiles.length) {
        this.currFile = this.responseFiles[this.currIndex];
        this.currFile.onStatusUpdate.subscribe(status => this.audioStatus = status);
        this.currFile.play();
      }
      this.audioState = 'playing';
    } catch (e) {
      this.showAlert((<Error>e).message);
    }
  }

  pauseFile() {
    try {
      if (this.currFile != null) {
        this.currFile.pause();
        this.audioState = 'not-playing';
      }
    } catch (e) {
      this.showAlert((<Error>e).message);
    }
  }

  checkAudio() {
    if (this.audioStatus == 4) {
      this.currFile.stop();
      this.audioState = 'not-playing';
    }
  }

  setData(){
    var curr = this.questionIndexes[this.currIndex];
    this.questionText = this.questions_array[curr];
    this.attribute1 = this.good_responses_array[curr][0];
    this.attribute2 = this.good_responses_array[curr][1];
    this.attribute3 = this.good_responses_array[curr][2];
    this.attribute1Score = 50;
    this.attribute2Score = 50;
    this.attribute3Score = 50;
  }

  nextquestion(){
    var currScore = (this.attribute1Score + this.attribute2Score + this.attribute3Score) / 3;
    this.scores.push(currScore);
    if (this.currIndex < this.questionIndexes.length - 1) {
      this.currIndex++;
      this.setData();
      this.currFile = null;
      this.audioState = 'not-playing';
    } else {
      this.calculateGrade();
      this.state = 'done';
    }
    this.content.scrollToTop();
  }

  onLastQuestion() {
    return this.currIndex == this.questionIndexes.length - 1;
  }

  calculateGrade() {
    var sum = 0;
    for (var i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    var avg = sum / this.scores.length;
    var grade;
    if (avg < 10) {
      grade = "C";
    } else if (avg >= 10 &&  avg < 25) {
      grade = "C+";
    } else if (avg >= 25 && avg < 40) {
      grade = "B-";
    } else if (avg >= 40 && avg < 55) {
      grade = "B";
    } else if (avg >= 55 && avg < 70) {
      grade = "B+";
    } else if (avg >= 70 && avg < 85) {
      grade = "A-";
    } else if (avg >= 85 && avg < 95) {
      grade = "A";
    } else if (avg >= 95) {
      grade = "A+";
    }
    this.finalGrade = grade;
  }

  navhome() {
    this.navCtrl.setRoot(MainPage);
  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}
