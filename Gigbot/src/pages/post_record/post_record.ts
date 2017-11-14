
import { Component, ViewChild, Injectable} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, ViewController } from 'ionic-angular';
import { AudioProvider, IAudioTrack, ITrackConstraint} from 'ionic-audio';

@IonicPage()
@Component({
  selector: 'page-post-record',
  templateUrl: 'post_record.html',
})

@Injectable()
export class PostRecordPage {

  startedplayback:boolean;
  responsePaths: string[];
  myRecordings : any = [];
  allRecordings: any = [];
  selectedRecording: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private _audioProvider: AudioProvider) {

      this.responsePaths = this.navParams.get('responsePaths');
      console.log(this.responsePaths);

      this.myRecordings = this.responsePaths.map(path => {
        var jsonStr = '{"src": "' + path + '", "preload": "metadata"}';
        console.log(jsonStr);
        return JSON.parse(jsonStr);
      });
      console.log(this.myRecordings);
  }

 playback(){

    this.startedplayback = true;

  }

  feedbackandscore(){
    //this.navCtrl.push(FeedbackPage);
  }

}
