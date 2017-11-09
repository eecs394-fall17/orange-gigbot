import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  questions: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, db:AngularFireDatabase) {
    this.questions = db.list("/Questions").valueChanges();
    console.log(this.questions);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

}
