import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostRecordPage } from './post_record';

@NgModule({
  declarations: [
    PostRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(PostRecordPage),
  ],
})
export class PostRecordPageModule {}
