import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { MessageComponent, MessageListComponent } from "./messages";
import { MessageFormComponent } from "./message-form";
import { MessageService } from "../shared/services/message/message.service";
import {ChannelFormComponent} from "./channel-form/channel-form.component";
import {ChannelService} from "../shared/services/channel/channel.service";
import {ChannelListComponent} from "./channels/channel-list/channel-list.component";
import {MessageModule} from "./messages/message/message.module";
import {ChannelModule} from "./channels/channel/channel.module";


@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    MessageListComponent,
    MessageComponent,
    ChannelFormComponent,
    ChannelListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChannelModule
  ],
  providers: [MessageService, ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
