import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AudioProvider, IAudioTrack, ITrackConstraint} from 'ionic-audio';
import { MainPage } from '../main/main';

@IonicPage()
@Component({
  selector: 'self-eval',
  templateUrl: 'self-eval.html',
})
export class SelfEvalPage {

  startedplayback:boolean;
  responsePaths: string[];
  questionIndexes: number[];
  myRecordings : any = [];
  allRecordings: any = [];
  selectedRecording: any;

  questions_db: Observable<any[]>;
  questions_db_array: any = [];
  questions_array: any = [];
  good_responses_array: any = [];
  scores: number[] = [];
  finalGrade: string;

  state: string = 'evaluating';
  dbIndex: number = 0;
  currIndex: number = 0;

  questionText: string = 'QUESTION TEXT';
  attribute1: string = "1st good attribute";
  attribute2: string = "2nd good attribute";
  attribute3: string = "3rd good attribute";

  attribute1Score: number = 50;
  attribute2Score: number = 50;
  attribute3Score: number = 50;

  constructor(public navCtrl: NavController, public navParams: NavParams, db:AngularFireDatabase, private _audioProvider: AudioProvider) {
    this.responsePaths = this.navParams.get('responsePaths');
    this.questionIndexes = this.navParams.get('questionIndexes');
    this.questions_db = db.list("/Question-database").valueChanges();
    this.questions_db.subscribe(questions_db => {
      this.questions_db_array = questions_db;
      this.questions_array = this.questions_db_array.map(q => q.Question);
      this.good_responses_array = this.questions_db_array.map(q => q.GoodResponseAttributes);
      this.setData();
      console.log(this.good_responses_array);
      console.log(this.questionIndexes);
    });

    this.myRecordings = this.responsePaths.map(path => {
      var jsonStr = '{"src": "' + path + '", "preload": "metadata"}';
      return JSON.parse(jsonStr);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelfEval');
  }

  setData(){
    var curr = this.questionIndexes[this.dbIndex];
    console.log(curr);
    console.log(this.questions_array);
    this.questionText = this.questions_array[curr];
    console.log(this.questionText);
    this.attribute1 = this.good_responses_array[curr][0];
    this.attribute2 = this.good_responses_array[curr][1];
    this.attribute3 = this.good_responses_array[curr][2];
  }

  nextquestion(){
    var currScore = (this.attribute1Score + this.attribute2Score + this.attribute3Score) / 3;
    this.scores.push(currScore);
    if (this.dbIndex < this.questionIndexes.length - 1) {
      this.dbIndex++;
      this.setData();
    } else {
      this.calculateGrade();
      this.state = 'done';
    }
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
  
}
