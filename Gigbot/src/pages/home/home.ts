import { Component } from '@angular/core';
import { NavController, AlertController, Platform, ViewController } from 'ionic-angular';
import { MainPage } from '../main/main';
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
  username = '';
  password = '';
  idInterview = '';

  ionViewDidEnter() {

     console.log('ionViewDidLoad HomePage');

  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public platform: Platform) {

    }

  navigate(){
        //console.log('navigate!!!, idInterview',id);
        this.navCtrl.push(MainPage);//,{idInterview: id,});

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

}
