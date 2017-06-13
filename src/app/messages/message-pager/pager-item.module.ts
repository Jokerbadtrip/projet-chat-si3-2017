
import { MessageModel } from '../../../shared/models/MessageModel';
import { MessageComponent } from '../message/message.component';
import { MessagePagerModule } from './';
import { PagerItemComponent } from './pager-item-component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    PagerItemComponent
  ],
  imports: [],
  exports: [PagerItemComponent]
})
export class PagerItemModule {
 }
