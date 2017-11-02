import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ionicBootstrap } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { ChatPage } from '../chat/chat';
import { LibraryPage } from '../library/library';
import { PracticePage } from '../practice/practice';
import { NetworkPage } from '../network/network';

//

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  navchatpage(){
    this.navCtrl.push(ChatPage);
  }
  navlibrarypage(){
      this.navCtrl.push(LibraryPage);
  }
  navpracticepage(){
      this.navCtrl.push(PracticePage);
  }  
  navnetworkpage(){
      this.navCtrl.push(NetworkPage);
  }
}

