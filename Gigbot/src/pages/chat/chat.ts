import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  public idInterview;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idInterview = navParams.get("idInterview");
    console.log("idInterview: "+this.idInterview);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  send() {
    //console.log(this.newmessage + ', '+this.username);
  }

}
