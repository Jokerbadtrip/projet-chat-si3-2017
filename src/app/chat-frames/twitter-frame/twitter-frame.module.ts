import {NgModule} from "@angular/core";
import {TwitterFrameComponent} from "./twitter-frame.component";
import {CommonModule} from "@angular/common";
import {MessageService} from "../../../shared/services/message/message.service";
import {MessageModel} from "../../../shared/models/MessageModel";
@NgModule({

  declarations: [
    TwitterFrameComponent
  ],

  imports: [
    CommonModule,
    MessageModel
  ],
  exports: [
    TwitterFrameComponent
  ],
  providers: [MessageModel]
})

export class TwitterFrameModule {}
