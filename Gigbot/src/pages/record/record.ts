import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, ViewController } from 'ionic-angular';
import { MediaPlugin, MediaCapture, Camera} from 'ionic-native';
import { Media, MediaObject} from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { CountdownPage } from '../countdown/countdown';

import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { PostRecordPage } from '../post_record/post_record';
import { SelfEvalPage } from '../self-eval/self-eval';
import { MainPage } from '../main/main';
import { AngularFireModule } from 'angularfire2';
import { QuestionProvider } from '../../providers/question/question';

@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})

@Injectable()
export class RecordPage {

  currMedia: MediaPlugin = null;
  currMediaIndex: number = 0;
  currMediaPath = 'response-' + this.currMediaIndex + '.wav';
  questions_db: Observable<any[]>;
  questions_db_array: any = [];
  questions_array: any = [];
  questionIndex: number = 0;
  responses: string[] = [];
  question_indexes: number[] = [];
  question_count = 1;
  questionSource: string;

  state : String;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public alertCtrl: AlertController,
  public platform: Platform, db:AngularFireDatabase,
  private cameraPreview: CameraPreview, private questionProvider: QuestionProvider) {
    this.questionSource = this.navParams.get('questionSource');
    this.state = 'ready';

    this.questions_db = db.list("/Question-database").valueChanges();
    this.questions_db.subscribe(questions_db => {
      this.questions_db_array = questions_db;
      this.questions_array = this.questions_db_array.map(q => q.Question);
      console.log(this.questions_db_array);
      console.log(this.questions_array);
      this.newQuestionIndex();
    });
  }

  options = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: this.cameraPreview.CAMERA_DIRECTION.BACK,
    toBack: false,
    tapPhoto: true,
    tapFocus: false,
    previewDrag: false
  };

  get CurrMedia(): MediaPlugin {
    if (this.currMedia == null) {
      //this.currMediaPath = '../../assets/localaudio/response-' + this.currMediaIndex + '.wav';
      this.currMediaPath = 'response-' + this.currMediaIndex + '.wav';
      this.currMedia = new MediaPlugin(this.currMediaPath);
    }
    return this.currMedia;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PracticePage');
  }

  newQuestionIndex() {
    if (this.questionSource == 'favorites') {
      return this.newFavoriteQuestionIndex();
    }
    else {
      return this.newRandomQuestionIndex();
    }
  }

  newRandomQuestionIndex() {
    do {
      var newQuestionIndex = Math.floor(Math.random() * this.questions_array.length);
    }
    while (newQuestionIndex == this.questionIndex);
    this.questionIndex = newQuestionIndex;
    console.log(this.questionIndex);
  }

  newFavoriteQuestionIndex() {
    var favorites = this.questionProvider.getFavorites();
    var newQuestionIndex;
    if (this.question_count-1 < favorites.length) {
      newQuestionIndex = favorites[this.question_count-1];
    }
    else {
      newQuestionIndex = this.newRandomQuestionIndex();
    }
    this.questionIndex = newQuestionIndex;
  }

  newQuestion() {
    try {
      this.CurrMedia.stopRecord()
      this.state = 'ready';

      this.currMediaIndex++;
      this.currMediaPath = 'response-' + this.currMediaIndex + '.wav';
      //this.currMediaPath = '../../assets/localaudio/response-' + this.currMediaIndex + '.wav';
      this.currMedia =  new MediaPlugin(this.currMediaPath);
    }
    catch (e) {
      this.showAlert((<Error>e).message)
    }
    this.question_count++;
    this.newQuestionIndex();
  }

  startVideoRecording(){
    console.log('StartVideoRecording');
    this.cameraPreview.startCamera(this.options).then(
    (res) => {
      console.log(res)
    },
    (err) => {
      console.log(err)
    });;

  }

  startAudioRecording() {
    try {
      this.CurrMedia.startRecord();
      this.state = 'recording';
      this.responses.push(this.currMediaPath);
      this.question_indexes.push(this.questionIndex);
      console.log("success startRecording");
    }
    catch (e) {
      this.showAlert((<Error>e).message);
    }
  }

  pauseAudioRecording() {
    try {
    this.CurrMedia.pauseRecord();
    this.state = 'paused';
    console.log("success pauseRecording");
  }
  catch (e) {
      this.showAlert((<Error>e).message);
    }
  }

  resumeAudioRecording() {
    try {
      this.CurrMedia.resumeRecord();
      this.state = 'recording';
      console.log("success resumeRecording");
    }
    catch (e) {
      this.showAlert((<Error>e).message);
    }
  }

  stopAudioRecording() {
    try {
      this.CurrMedia.stopRecord();
      this.state = 'recorded';
      console.log("success stopRecording");
      this.navCtrl.push(SelfEvalPage, {'responsePaths': this.responses, 'questionIndexes': this.question_indexes});
    }
    catch (e) {
      this.showAlert((<Error>e).message)
    }
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
