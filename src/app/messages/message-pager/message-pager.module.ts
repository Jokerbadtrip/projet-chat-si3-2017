import { MessageService } from "../../../shared/services";
import { MessageModule } from '../message/message.module';
import { MessagePagerComponent } from "./";
import { PagerItemModule } from "./pager-item.module";
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
@NgModule({
  declarations: [
    MessagePagerComponent
  ],
  imports: [
    CommonModule,
    MessageModule,
    PagerItemModule
 ],
  
  exports: [MessagePagerComponent],
  providers: [MessageService]
})
export class MessagePagerModule {
 }
