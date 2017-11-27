import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  question: any;
  questionText: string;
  goodResponseAttributes: string[];
  category: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.question = navParams.get('question');
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
  }

}
