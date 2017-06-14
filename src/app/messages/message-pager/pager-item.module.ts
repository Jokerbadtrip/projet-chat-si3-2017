
import { MessageModel } from '../../../shared/models/MessageModel';
import { MessageComponent } from '../message/message.component';
import { MessageModule } from '../message/message.module';
import { MessagePagerModule } from './';
import { PagerItemComponent } from './pager-item-component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    PagerItemComponent
  ],
  imports: [
    CommonModule,
    MessageModule
  ],
          
  exports: [PagerItemComponent]
})
export class PagerItemModule {
 }
