import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, ViewController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { MediaPlugin, MediaCapture, Camera} from 'ionic-native';
import { Media, MediaObject} from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { CountdownPage } from '../countdown/countdown';
import { RecordPage } from '../record/record';
import { PostRecordPage } from '../post_record/post_record';

import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';

@IonicPage()
@Component({
  selector: 'page-practice',
  templateUrl: 'practice.html',
})

@Injectable()
export class PracticePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public alertCtrl: AlertController,
  public platform: Platform, db:AngularFireDatabase,
  private cameraPreview: CameraPreview) {

  }


  navcountdownpage() {
    this.navCtrl.push(CountdownPage);
  }
  
  navtologin() {
    this.navCtrl.setRoot(MainPage);
  }

ionViewDidLoad() {
  console.log('ionViewDidLoad PracticePage');
}


  navrecordpage() {
    var questionSource = (<any>document.getElementById("question-select")).value;
    console.log(questionSource)
    this.navCtrl.push(RecordPage, {'questionSource': questionSource});
  }

}
