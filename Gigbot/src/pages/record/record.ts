import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { Media, MediaObject} from '@ionic-native/media';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { SelfEvalPage } from '../self-eval/self-eval';
import { MainPage } from '../main/main';
import { QuestionProvider } from '../../providers/question/question';

@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})

@Injectable()
export class RecordPage {

  currMediaIndex: number;
  currMediaPath: string;
  questions_db: Observable<any[]>;
  questions_db_array: any = [];
  questions_array: any = [];
  questionIndex: number;
  question_indexes: number[] = [];
  question_count = 1;
  questionSource: string;

  interviewLength: number;

  currFile: MediaObject;
  responseFiles: any[] = [];
  state : String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public alertCtrl: AlertController,
  public platform: Platform, db:AngularFireDatabase,
  private questionProvider: QuestionProvider,
  private media: Media) {
    this.questionSource = this.navParams.get('questionSource');
    if (this.questionSource == 'random') {
      this.interviewLength = 5;
    } else {
      this.interviewLength = this.questionProvider.getFavorites().length;
    }
    this.state = 'ready';
    this.questionIndex = 0;
    this.question_indexes = [];
    this.currMediaIndex = 0;
    this.currMediaPath = 'response-' + this.currMediaIndex + '.wav';
    this.currFile = this.media.create(this.currMediaPath);

    this.questions_db = db.list("/Question-database").valueChanges();
    this.questions_db.subscribe(questions_db => {
      this.questions_db_array = questions_db;
      this.questions_array = this.questions_db_array.map(q => q.Question);
      this.questionIndex = this.newQuestionIndex();
      console.log(this.questionIndex);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PracticePage');
  }

  newQuestionIndex(): number {
    if (this.questionSource == 'favorites') {
      return this.newFavoriteQuestionIndex();
    }
    else {
      return this.newRandomQuestionIndex();
    }
  }

  newRandomQuestionIndex(): number {
    do {
      var newQuestionIndex = Math.floor(Math.random() * this.questions_array.length);
    } while (newQuestionIndex == this.questionIndex);
    return newQuestionIndex;
  }

  newFavoriteQuestionIndex(): number {
    var favorites = this.questionProvider.getFavorites();
    var newQuestionIndex;
    if (this.question_count-1 < favorites.length) {
      newQuestionIndex = favorites[this.question_count-1];
    }
    else {
      newQuestionIndex = this.newRandomQuestionIndex();
    }
    return newQuestionIndex;
  }

  newQuestion() {
    try {
      this.stopAudioRecording();
      this.currMediaIndex++;
      this.currMediaPath = 'response-' + this.currMediaIndex + '.wav';
      this.currFile = this.media.create(this.currMediaPath);
    }
    catch (e) {
      this.showAlert((<Error>e).message)
    }
    this.question_count++;
    this.questionIndex = this.newQuestionIndex();
    console.log(this.questionIndex);
  }

  startAudioRecording() {
    try {
      this.currFile.startRecord();
      this.state = 'recording';
      console.log("success startRecording");
    }
    catch (e) {
      this.showAlert((<Error>e).message);
    }
  }

  pauseAudioRecording() {
    try {
    this.currFile.pauseRecord();
    this.state = 'paused';
    console.log("success pauseRecording");
  }
  catch (e) {
      this.showAlert((<Error>e).message);
    }
  }

  resumeAudioRecording() {
    try {
      this.currFile.resumeRecord();
      this.state = 'recording';
      console.log("success resumeRecording");
    }
    catch (e) {
      this.showAlert((<Error>e).message);
    }
  }

  stopAudioRecording() {
    try {
      this.question_indexes.push(this.questionIndex);
      this.currFile.stopRecord();
      this.responseFiles.push(this.currFile);
      this.state = 'ready';
    } catch (e) {
      this.showAlert((<Error>e).message); 
    }

  }

  endInterview() {
    this.stopAudioRecording();
    this.navCtrl.push(SelfEvalPage, {'questionIndexes': this.question_indexes, 'responseFiles': this.responseFiles});
  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  navtologin() {
    this.navCtrl.setRoot(MainPage);
  }

}
