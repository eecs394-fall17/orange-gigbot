import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { MediaPlugin } from 'ionic-native';
import { Media, MediaObject} from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { Injectable } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {

  mediaPlugin: MediaPlugin = null;

  file : File;


  ionViewDidEnter() {

     console.log('ionViewDidLoad AudioRecording');

  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
      public platform: Platform) {

      }

  get MediaPlugin(): MediaPlugin {
  if (this.mediaPlugin == null) {
    this.mediaPlugin = new MediaPlugin('recording.wav');
  }
  return this.mediaPlugin;
}



startRecording() {
  try {
      this.MediaPlugin.startRecord();
    //this.file.startRecord();
    //this.media.startRecord();
  }
  catch (e) {
    this.showAlert((<Error>e).message);
  }
}

stopRecording() {
  try {
    this.MediaPlugin.stopRecord();
  }
  catch (e) {
    this.showAlert((<Error>e).message)
  }
}

startPlayback() {
  try {
    this.MediaPlugin.play();
  }
  catch (e) {
    this.showAlert((<Error>e).message);
  }
}

stopPlayback() {
  try {
    this.MediaPlugin.stop();
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
