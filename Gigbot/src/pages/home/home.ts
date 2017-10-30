import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  questions: Observable<any[]>

  constructor(public navCtrl: NavController, db:AngularFireDatabase) {
    this.questions = db.list("/Questions").valueChanges();
    console.log(this.questions);
  }
}
