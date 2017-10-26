import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  username = '';
  password = '';
  idInterview = '';

  ChatPage = ChatPage;
  constructor(public navCtrl: NavController) {
  }
  navigate(id){
    console.log('navigate!!!, idInterview',id);
    this.navCtrl.push(ChatPage,{idInterview: id,});
  }

}
