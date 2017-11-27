import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuestionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionProvider {

  favorites: number[] = [];

  constructor() {
    console.log('Hello QuestionProvider Provider');
  }

  addToFavorites(index) {
    if (this.favorites.indexOf(index) == -1)
    this.favorites.push(index);
  }

  getFavorites() {
    return this.favorites;
  }

}
