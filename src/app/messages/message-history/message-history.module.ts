import {NgModule} from "@angular/core";
import {MessageHistoryComponent} from "./message-history.component";
import {CommonModule} from "@angular/common";
@NgModule({

  declarations:[
    MessageHistoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageHistoryComponent
  ]

})
export class MessageHistoryModule{

}
