
import { MessageModel } from '../../../shared/models/MessageModel';
import { MessagePagerModule } from './';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    PagerItemComponent
  ],
  imports: [
    MessageModel,
    MessagePagerModule
  ],
  exports: [PagerItemComponent]
})
export class PagerItemModule {
 }
