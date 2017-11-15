import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'self-eval',
  templateUrl: 'self-eval.html',
})
export class SelfEvalPage {
  state: string = 'evaluating';
  questionIndex: number = 0;

  questionText: string = 'QUESTION TEXT';
  attribute1: string = "A good answer for 1";
  attribute2: string = "A good answer for 2";
  attribute3: string = "A good answer for 3";

  attribute1Score: number = 0;
  attribute2Score: number = 1;
  attribute3Score: number = 2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelfEval');
  }

  nextquestion(){
    this.questionIndex++;
  }
  /*
  get score1(){
    return (this.attr11 + this.attr12 + this.attr13)/3;
    //return 51;
  }
  get score2(){
    return (this.attr21 + this.attr22 + this.attr23)/3;
    //return 62;
  }
  */

}
