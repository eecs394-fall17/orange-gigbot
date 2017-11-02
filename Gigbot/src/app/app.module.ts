import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { MainPage } from '../pages/main/main';
import { LibraryPage } from '../pages/library/library';
import { NetworkPage } from '../pages/network/network';
import { PracticePage } from '../pages/practice/practice';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    MainPage,
    LibraryPage,
    NetworkPage,
    PracticePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    MainPage,
    LibraryPage,
    NetworkPage,
    PracticePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],

})
export class AppModule {}
