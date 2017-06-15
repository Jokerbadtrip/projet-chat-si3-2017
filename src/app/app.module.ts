import { MessageService } from "../shared/services";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { MessageComponent, MessageListComponent, MessageModule } from "./messages";
import { MessageFormComponent } from "./forms/message-form";
import {ChannelFormComponent} from "./forms/channel-form/channel-form.component";
import {ChannelService} from "../shared/services/channel/channel.service";
import {ChannelListComponent} from "./channels/channel-list/channel-list.component";
import {ChannelModule} from "./channels/channel/channel.module";
import {FormComponent} from "./forms/forms.component";
import {MessageHistoryComponent} from "./messages/message-history/message-history.component";
import {MessageHistoryModule} from "./messages/message-history/message-history.module";
import {EmojiPipe} from "../shared/pipes/emoji.pipe";
import {TwitterPipe} from "../shared/pipes/twitter.pipe";
import {YoutubeFrameComponent} from "./chat-frames/youtube-frame/youtube-frame.component";
import {YoutubePipe} from "../shared/pipes/youtube.pipe";
import {TwitterFrameComponent} from "./chat-frames/twitter-frame/twitter-frame.component";



@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    MessageListComponent,
    ChannelListComponent,
    ChannelFormComponent,
    MessageComponent,
    MessageHistoryComponent,
    FormComponent,
    EmojiPipe,
    TwitterPipe,
    YoutubeFrameComponent,
    YoutubePipe
    TwitterPipe,
    TwitterFrameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChannelModule,
    FormsModule
  ],
  providers: [MessageService, ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
