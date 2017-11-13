import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Media, MediaObject} from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { MediaPlugin } from 'ionic-native';
import { MediaFile, CaptureVideoOptions, CaptureError} from 'ionic-native';
import{ MediaCapture} from'ionic-native';
import { Camera } from '@ionic-native/camera';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { MainPage } from '../pages/main/main';
import { LibraryPage } from '../pages/library/library';
import { NetworkPage } from '../pages/network/network';
import { PracticePage } from '../pages/practice/practice';
import { RecordPage } from '../pages/record/record';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAi43bPQCzb9g2EXzk32oqPuVJwyj_wHhs",
  authDomain: "orange-394-gigbot.firebaseapp.com",
  databaseURL: "https://orange-394-gigbot.firebaseio.com",
  projectId: "orange-394-gigbot",
  storageBucket: "orange-394-gigbot.appspot.com",
  messagingSenderId: "1029482160421"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    MainPage,
    LibraryPage,
    NetworkPage,
    PracticePage,
    RecordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, 'gigbot'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
    Media,
    File,
    MediaCapture,
    Camera,
    CameraPreview,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],

})
export class AppModule {}
