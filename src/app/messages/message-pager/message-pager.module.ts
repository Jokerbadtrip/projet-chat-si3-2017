import { MessageService } from "../../../shared/services";
import { MessagePagerComponent } from "./";
import { PagerItemModule } from "./pager-item.module";
import { NgModule } from "@angular/core";
@NgModule({
  declarations: [
    MessagePagerComponent
  ],
  imports: [PagerItemModule],
  exports: [MessagePagerComponent],
  providers: [MessageService]
})
export class MessagePagerModule {
 }
