import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { DisplayQuestionPage } from '../display-question/display-question';

//import { QuestionCardComponent } from '../../components/question-card/question-card';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  questions_db: Observable<any[]>;
  questions_db_array: any = [];
  questions_array: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, db:AngularFireDatabase) {
    this.questions_db = db.list("/Question-database").valueChanges();
    this.questions_db.subscribe(questions_db => {
      this.questions_db_array = questions_db;
      this.questions_array = this.questions_db_array.map(q => q.Question);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

  navToQuestion(index) {
    console.log(index);
    this.navCtrl.push(DisplayQuestionPage, {'question': this.questions_db_array[index], 'index': index});
  }

}
