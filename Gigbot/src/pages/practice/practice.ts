import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, ViewController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { Injectable } from '@angular/core';
import { RecordPage } from '../record/record';
import { QuestionProvider } from '../../providers/question/question';

@IonicPage()
@Component({
  selector: 'page-practice',
  templateUrl: 'practice.html',
})

@Injectable()
export class PracticePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public alertCtrl: AlertController,
  public platform: Platform,
  private questionProvider: QuestionProvider) {

  }
  
  navtologin() {
    this.navCtrl.setRoot(MainPage);
  }

ionViewDidLoad() {
  console.log('ionViewDidLoad PracticePage');
}


  navrecordpage() {
    var questionSource = 'random';
    if ((<any>document.getElementById("favorites")).checked) {
      questionSource = 'favorites';
    } 
    console.log(questionSource)
    if (questionSource == 'favorites' && this.questionProvider.getFavorites().length == 0) {
      this.showAlert();
    } else {
      this.navCtrl.push(RecordPage, {'questionSource': questionSource});
    }
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: "You selected to receive your favorite questions in your interview but you haven't favorited and questions.",
      subTitle: "Please favorite some questions in the Question Library and try again!",
      buttons: ['OK']
    });
    alert.present();
  }
}
