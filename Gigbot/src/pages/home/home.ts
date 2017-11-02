import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MainPage } from '../main/main';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  username = '';
  password = '';
  idInterview = '';

  constructor(public navCtrl: NavController) {
  }
  navigate(){
    //console.log('navigate!!!, idInterview',id);
    this.navCtrl.push(MainPage);//,{idInterview: id,});
  }

}
