import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelfEval } from './self-eval';

@NgModule({
  declarations: [
    SelfEval,
  ],
  imports: [
    IonicPageModule.forChild(SelfEval),
  ],
})
export class SelfEvalPageModule {}
