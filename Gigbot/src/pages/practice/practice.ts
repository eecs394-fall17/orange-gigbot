import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, ViewController } from 'ionic-angular';
//import { MainPage } from '../main/main';
import { MediaPlugin } from 'ionic-native';
import { Media, MediaObject} from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { Injectable } from '@angular/core';


/**
 * Generated class for the PracticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 export enum AudioRecorderState {
     Ready,
     Recording,
     Recorded,
     Playing
 }

@IonicPage()
@Component({
  selector: 'page-practice',
  templateUrl: 'practice.html',
})

@Injectable()
export class PracticePage {

  mediaPlugin: MediaPlugin = null;
  recorded: boolean;
  state : AudioRecorderState;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController, public platform: Platform) {
      this.recorded = false;
  }

  get MediaPlugin(): MediaPlugin {
  if (this.mediaPlugin == null) {
    this.mediaPlugin = new MediaPlugin('recording.wav');
  }
  return this.mediaPlugin;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PracticePage');
  }

  startRecording() {
    try {
        this.MediaPlugin.startRecord();
        this.state = AudioRecorderState.Recording;
        console.log("success startRecording");
    }
    catch (e) {
      this.showAlert((<Error>e).message);
    }
  }

  stopRecording() {
    try {
      this.MediaPlugin.stopRecord();
      this.state = AudioRecorderState.Recorded;
      this.recorded = true;
      console.log("success stopRecording");
    }
    catch (e) {
      this.showAlert((<Error>e).message)
    }
  }

  playRecording() {
    try {
      this.MediaPlugin.play();
      this.state = AudioRecorderState.Playing;
      console.log("success playRecording");
    }
    catch (e) {
      this.showAlert((<Error>e).message);
    }
  }

  stopRecordingPlay(){
    try {
      this.MediaPlugin.stop();
      this.state = AudioRecorderState.Ready;
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
