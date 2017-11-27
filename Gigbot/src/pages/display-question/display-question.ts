import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';

/**
 * Generated class for the DisplayQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display-question',
  templateUrl: 'display-question.html',
})
export class DisplayQuestionPage {
  index: number;
  question: any;
  questionText: string;
  goodResponseAttributes: string[];
  category: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private questionProvider: QuestionProvider) {
    this.question = navParams.get('question');
    this.index = navParams.get('index');
    this.questionText = this.question.Question;
    this.category = this.question.Category;
    this.goodResponseAttributes = this.question.GoodResponseAttributes;
    console.log(this.questionText);
    console.log(this.category);
    console.log(this.goodResponseAttributes);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayQuestionPage');
  }

  addToFavorites() {
    console.log("favorites");
    this.questionProvider.addToFavorites(this.index);
    console.log(this.questionProvider.getFavorites());
    this.showAlert();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Question Added To Favorites!',
      buttons: ['OK']
    });
    alert.present();
  }

}
