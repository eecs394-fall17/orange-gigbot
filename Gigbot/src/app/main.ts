import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
//
import { NavController } from 'ionic-angular';
//import { MainPage } from '../main/main';
import { ChatPage } from '../pages/chat/chat';
import { LibraryPage } from '../pages/library/library';
import { PracticePage } from '../pages/practice/practice';
import { NetworkPage } from '../pages/network/network';
//
platformBrowserDynamic().bootstrapModule(AppModule);

//@Page({
//    templateUrl: 'build/pages/main/main.html'
//})
export class MainPage {
  
    constructor(public navCtrl: NavController) {
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
