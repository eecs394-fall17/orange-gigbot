import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { MainPage } from '../main/main';
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

  navlogin(){
    console.log('navlogin');
    this.navCtrl.push(MainPage);
  }


}
