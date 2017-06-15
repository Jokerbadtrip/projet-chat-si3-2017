import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MessageModel} from "../../../shared/models/MessageModel";
import {InstagramFrameComponent} from "./instagram-frame.component";
@NgModule({

  declarations: [
    InstagramFrameComponent
  ],

  imports: [
    CommonModule,
    MessageModel
  ],
  exports: [
   InstagramFrameComponent
  ],
  providers: [MessageModel]
})

export class InstagramFrameModule {}
