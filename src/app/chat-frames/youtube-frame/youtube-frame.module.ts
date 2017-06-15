import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { YoutubeFrameComponent } from "./youtube-frame.component";
import {MessageModel} from "../../../shared/models/MessageModel";

@NgModule({
  declarations: [
    YoutubeFrameComponent
  ],
  imports: [
    CommonModule,
    MessageModel
  ],
  exports: [YoutubeFrameComponent],
  providers: [MessageModel]
})

export class YoutubeFrameModule { }
