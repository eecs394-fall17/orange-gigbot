import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibraryPage } from './library';
import { QuestionCardComponent } from '../../components/question-card/question-card';

@NgModule({
  declarations: [
    LibraryPage,
  ],
  imports: [
    IonicPageModule.forChild(LibraryPage),
    QuestionCardComponent
  ],
})
export class LibraryPageModule {}
