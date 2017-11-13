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

/**
 * Generated class for the RecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})

@Injectable()
export class RecordPage {

  mediaPlugin: MediaPlugin = null;
  recorded: boolean;
  questions_db: Observable<any[]>;
  questions_db_array: any = [];
  questions_array: any = [];
  questionIndex: number = 0;

  state : String;
  //state : AudioRecorderState = AudioRecorderState.Ready;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public alertCtrl: AlertController,
  public platform: Platform, db:AngularFireDatabase,
  private cameraPreview: CameraPreview) {
    this.recorded = false;
    this.state = 'ready';
    this.questions_db = db.list("/Question-database").valueChanges();
    this.questions_db.subscribe(questions_db => {
      this.questions_db_array = questions_db;
      this.questions_array = this.questions_db_array.map(q => q.Question);
      console.log(this.questions_db_array);
      console.log(this.questions_array);
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

  get MediaPlugin(): MediaPlugin {
    if (this.mediaPlugin == null) {
      this.mediaPlugin = new MediaPlugin('recording.wav');
    }
    return this.mediaPlugin;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PracticePage');
  }

  newQuestion() {
    this.questionIndex = (this.questionIndex + 1) % this.questions_array.length;
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

  pauseAudioRecording() {
    try {
    this.MediaPlugin.pauseRecord();
    //this.state = AudioRecorderState.Recording;
    this.state = 'paused';
    console.log("success pauseRecording");
  }
  catch (e) {
      this.showAlert((<Error>e).message);
    }
  }


  resumeAudioRecording() {
    try {
        this.MediaPlugin.resumeRecord();
        //this.state = AudioRecorderState.Recording;
        this.state = 'recording';
        console.log("success resumeRecording");
    }
    catch (e) {
      this.showAlert((<Error>e).message);
    }
  }

  stopAudioRecording() {
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

  playAudioPlayback() {
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

  stopAudioPlayback(){
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
