import { MessageListComponent } from '..';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MessageService } from "../../../shared/services";
import { MessageModule } from "../message/message.module";
import { MessagePagerComponent } from "./";

@NgModule({
  declarations: [
    PagerItemComponent
  ],
  imports: [
    MessageListComponent
  ],
  exports: [PagerItemComponent]
})
export class PagerItemComponent {
 }
