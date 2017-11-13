
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
  myRecordings : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public alertCtrl: AlertController,
  public platform: Platform, private _audioProvider: AudioProvider) {

      this.myRecordings = [{
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
      artist: 'John Mayer',
      title: 'Why Georgia',
      art: 'img/johnmayer.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t30-MP3-V0.mp3',
      artist: 'John Mayer',
      title: 'Who Says',
      art: 'img/johnmayer.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    }];

  }

  ngAfterContentInit() {
    // get all tracks managed by AudioProvider so we can control playback via the API
    //this.recordings_array = this._audioProvider.tracks;
  }

  playSelectedTrack() {
    // use AudioProvider to control selected track
    //this._audioProvider.play(this.selectedTrack);
  }

  pauseSelectedTrack() {
     // use AudioProvider to control selected track
     //this._audioProvider.pause(this.selectedTrack);
  }

  onTrackFinished(track: any) {
    console.log('Track finished', track)
  }

  playback(){

    this.startedplayback = true;

  }

  feedbackandscore(){
    //this.navCtrl.push(FeedbackPage);
  }

}
