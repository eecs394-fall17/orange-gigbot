import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import{ MediaCapture} from'ionic-native';
import { Camera } from '@ionic-native/camera';
import { CameraPreview } from '@ionic-native/camera-preview';

import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider } from 'ionic-audio';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { LibraryPage } from '../pages/library/library';
import { PracticePage } from '../pages/practice/practice';
import { RecordPage } from '../pages/record/record';
import { SelfEvalPage } from '../pages/self-eval/self-eval';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ComponentsModule } from '../components/components.module';
import { DisplayQuestionPage } from '../pages/display-question/display-question';
import { QuestionProvider } from '../providers/question/question';

export const firebaseConfig = {
  apiKey: "AIzaSyAi43bPQCzb9g2EXzk32oqPuVJwyj_wHhs",
  authDomain: "orange-394-gigbot.firebaseapp.com",
  databaseURL: "https://orange-394-gigbot.firebaseio.com",
  projectId: "orange-394-gigbot",
  storageBucket: "orange-394-gigbot.appspot.com",
  messagingSenderId: "1029482160421"
};

export function myCustomAudioProviderFactory() {
  return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    LibraryPage,
    PracticePage,
    RecordPage,
    SelfEvalPage,
    DisplayQuestionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, 'gigbot'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicAudioModule.forRoot(myCustomAudioProviderFactory),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    LibraryPage,
    PracticePage,
    RecordPage,
    SelfEvalPage,
    DisplayQuestionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Media,
    File,
    MediaCapture,
    Camera,
    CameraPreview,
    IonicAudioModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestionProvider
  ],

})
export class AppModule {}
