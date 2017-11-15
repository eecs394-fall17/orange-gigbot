import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelfEvalPage } from './self-eval';

@NgModule({
  declarations: [
    SelfEvalPage,
  ],
  imports: [
    IonicPageModule.forChild(SelfEvalPage),
  ],
})
export class SelfEvalPageModule {}
