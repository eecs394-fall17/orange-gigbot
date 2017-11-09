import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController, AlertController, Platform } from 'ionic-angular';
=======
import { NavController, AlertController, Platform, ViewController } from 'ionic-angular';
import { MainPage } from '../main/main';
>>>>>>> origin/master
import { MediaPlugin } from 'ionic-native';
import { Media, MediaObject} from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

export enum AudioRecorderState {
    Ready,
    Recording,
    Recorded,
    Playing
}
=======
>>>>>>> origin/master

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {
  username = '';
  password = '';
  idInterview = '';

  ionViewDidEnter() {

     console.log('ionViewDidLoad HomePage');

  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public platform: Platform) {

<<<<<<< HEAD
  mediaPlugin: MediaPlugin = null;
  questions: Observable<any[]>;
  recorded: boolean;
  state : AudioRecorderState;

  ionViewDidEnter() {

     console.log('ionViewDidLoad AudioRecording');
    
  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
      public platform: Platform, db:AngularFireDatabase) {

        this.questions = db.list("/Questions").valueChanges();
        console.log(this.questions);
        this.recorded = false;
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
=======
    }

  navigate(){
        //console.log('navigate!!!, idInterview',id);
        this.navCtrl.push(MainPage);//,{idInterview: id,});
>>>>>>> origin/master
  }
}

stopRecordingPlay() {
  try {
    this.MediaPlugin.stop();
    this.state = AudioRecorderState.Ready;
    console.log("success stopRecordingPlay");
  }
  catch (e) {
    this.showAlert((<Error>e).message);
  }
}

<<<<<<< HEAD
showAlert(message) {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: message,
    buttons: ['OK']
  });
  alert.present();
}
=======


>>>>>>> origin/master
}
