import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MessageModel} from "../../../shared/models/MessageModel";
import {ImageFrameComponent} from "./image-frame.component";
@NgModule({

  declarations: [
    ImageFrameComponent
  ],

  imports: [
    CommonModule,
    MessageModel
  ],
  exports: [
    ImageFrameComponent
  ],
  providers: [MessageModel]
})

export class ImageFrameModule {}
