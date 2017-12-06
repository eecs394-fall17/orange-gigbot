import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LibraryPage } from '../library/library';
import { PracticePage } from '../practice/practice';
import { HomePage } from '../home/home'; 

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
  navlibrarypage(){
      this.navCtrl.push(LibraryPage);
  }
  navpracticepage(){
      this.navCtrl.push(PracticePage);
  }
  logout(){
    this.navCtrl.push(HomePage);
  }
}
