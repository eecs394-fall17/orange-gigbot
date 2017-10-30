import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Media, MediaObject} from '@ionic-native/media';
import { Injectable } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {

  media: MediaObject;

  ionViewLoaded() {
    this.media = new MediaObject('../Library/NoCloud/recording.wav')
  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
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
