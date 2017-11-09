import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PracticePage} from '../practice/practice';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

/**
 * Generated class for the CountdownPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-countdown',
  templateUrl: 'countdown.html',
})
export class CountdownPage {



  private tick: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //let timer = TimerObservable.create(2000, 1000).subscribe(t => { this.tick = 3 - t; });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountdownPage');
  }


  navpracticepage() {
    this.navCtrl.pop();
  }
}
