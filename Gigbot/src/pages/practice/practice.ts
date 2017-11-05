import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, ViewController } from 'ionic-angular';
//import { MainPage } from '../main/main';
import { MediaPlugin, MediaCapture, Camera} from 'ionic-native';
import { Media, MediaObject} from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';


/**
 * Generated class for the PracticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-practice',
  templateUrl: 'practice.html',
})

@Injectable()
export class PracticePage {

  mediaPlugin: MediaPlugin = null;
  recorded: boolean;
  questions: Observable<any[]>;
  questionsArray: any = [];
  questionIndex: number = 0;

  state : String;
  //state : AudioRecorderState = AudioRecorderState.Ready;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public alertCtrl: AlertController,
  public platform: Platform, db:AngularFireDatabase,
  private cameraPreview: CameraPreview) {

      this.recorded = false;
      this.state = 'ready';
      this.questions = db.list("/Questions").valueChanges();
      this.questions.subscribe(questions => {
        this.questionsArray = questions;
        console.log(this.questionsArray);});

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

  get MediaPlugin(): MediaPlugin {
  if (this.mediaPlugin == null) {
    this.mediaPlugin = new MediaPlugin('recording.wav');
  }
  return this.mediaPlugin;
}

ionViewDidLoad() {
  console.log('ionViewDidLoad PracticePage');
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
        this.MediaPlugin.startRecord();
        //this.state = AudioRecorderState.Recording;
        this.state = 'recording';
        console.log("success startRecording");
    }
    catch (e) {
      this.showAlert((<Error>e).message);
    }
  }

  stopRecording() {
    try {
      this.MediaPlugin.stopRecord();
      //this.state = AudioRecorderState.Recorded;
      this.state = 'recorded';
      this.recorded = true;
      console.log("success stopRecording");
    }
    catch (e) {
      this.showAlert((<Error>e).message)
    }
  }

  newQuestion() {
    this.questionIndex = (this.questionIndex + 1) % this.questionsArray.length;
  }

  playRecording() {
    try {
      this.MediaPlugin.play();
      //this.state = AudioRecorderState.Playing;
      this.state = 'playing';
      console.log("success playRecording");
    }
    catch (e) {
      this.showAlert((<Error>e).message);
    }
  }

  stopRecordingPlay(){
    try {
      this.MediaPlugin.stop();
      //this.state = AudioRecorderState.Ready;
      this.state = 'ready';
      console.log("success stopRecordingPlay");
    }
    catch (e) {
      this.showAlert((<Error>e).message);
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

}
