import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { NavController } from 'ionic-angular';

platformBrowserDynamic().bootstrapModule(AppModule);

//@Page({
//    templateUrl: 'build/pages/main/main.html'
//})
export class MainPage {
  
    constructor(public navCtrl: NavController) {
    }

  }
