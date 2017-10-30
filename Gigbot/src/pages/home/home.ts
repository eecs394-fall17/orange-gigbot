import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MediaPlugin } from 'ionic-native';
import { Media, MediaObject} from '@ionic-native/media';
import { Injectable } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {

  media : any; 

  ionViewLoaded() {

  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    var src = 'cdvfile://localhost/temporary/recording.mp3';
    this.media = new MediaPlugin("test.mp3");


  }

startRecording() {
  try {
    this.media.startRecord();
  }
  catch (e) {
    this.showAlert((<Error>e).message);
  }
}

stopRecording() {
  try {
    this.media.stopRecord();
  }
  catch (e) {
    this.showAlert((<Error>e).message)
  }
}

startPlayback() {
  try {
    this.media.play();
  }
  catch (e) {
    this.showAlert((<Error>e).message);
  }
}

stopPlayback() {
  try {
    this.media.stop();
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
