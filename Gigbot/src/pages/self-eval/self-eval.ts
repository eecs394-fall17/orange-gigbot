import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelfEvalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'self-eval',
  templateUrl: 'self-eval.html',
})
export class SelfEval {
  step = 1;

//question 1
  qtext1 = 'What # 1?';
  //good answer would contain:
  attrText11 = "A good answer for 11";
  attrText12 = "A good answer for 12";
  attrText13 = "A good answer for 13";
  //eval 1
  attr11 = 0;
  attr12 = 0;
  attr13 = 0;
//question 2
  qtext2 = 'What # 2?';
  //good answer would contain:
  attrText21 = "A good answer for 21";
  attrText22 = "A good answer for 22";
  attrText23 = "A good answer for 23";  
  //eval 2
  attr21 = 0;
  attr22 = 0;
  attr23 = 0;

  qnumber = 1;
  qtext = 'blah blah blah'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelfEval');
  }
  /*slider1(){
    console.log(this.attr1);
  }
  slider2(){
    console.log(this.attr2);
  }
  slider3(){
    console.log(this.attr3);
  }*/
  nextpage(){
    this.step = this.step + 1;
    console.log(this.score1 + '-' + this.score2);
  }
  get score1(){
    return (this.attr11 + this.attr12 + this.attr13)/3;
    //return 51;
  }
  get score2(){
    return (this.attr21 + this.attr22 + this.attr23)/3;
    //return 62;
  }

}
