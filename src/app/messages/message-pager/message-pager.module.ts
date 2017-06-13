import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MessageListComponent } from "../message-list/message-list.component";
import { MessageModule } from "../message";
import { MessageService } from "../../../shared/services";
import { MessagePagerComponent } from "./";

@NgModule({
  declarations: [
    MessagePagerComponent
  ],
  imports: [
    MessageListComponent,
    MessageModule
  ],
  exports: [MessagePagerComponent],
  providers: [MessageService]
})
export class MessagePagerModule {
 }
