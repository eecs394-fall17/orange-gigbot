import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the QuestionCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'question-card',
  templateUrl: 'question-card.html'
})
export class QuestionCardComponent implements OnInit{
  @Input() data: any;
  @Input() index: number;
  text: string;
  questionText: string;

  constructor() {
    console.log('Hello QuestionCardComponent Component');
    this.text = 'Question Text';
  }

  ngOnInit(){
    this.extractData();
  }

  extractData(){
    if (this.data) {
      this.questionText = this.data.Question;
      this.index = this.index + 1;
      this.text = "Q" + this.index + ": " + this.questionText;
    }
  }

}
