import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SelfEval } from '../pages/self-eval/self-eval';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SelfEval; //temporary changed, then go back to 'HomePage'
  //rootPage:any = HomePage; //temporary changed, then go back to 'HomePage'
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.overlaysWebView(false);
      splashScreen.hide();
    });
  }
}

