
import { Component, ViewChild, Injectable} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-post-record',
  templateUrl: 'post_record.html',
})

@Injectable()
export class PostRecordPage {

  startedplayback:boolean;
  recordings_array : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public alertCtrl: AlertController,
  public platform: Platform) {

      this.recordings_array = [1, 2, 3]; 
  }

  playback(){

    this.startedplayback = true;

  }

  feedbackandscore(){
    //this.navCtrl.push(FeedbackPage);
  }

}
