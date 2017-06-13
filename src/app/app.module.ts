import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { MessageComponent, MessageListComponent, MessageModule } from "./messages";
import { MessageFormComponent } from "./message-form";
import { PagerItemModule } from './messages/message-pager/pager-item.module';
import { PagerItemComponent } from './messages/message-pager/pager-item-component';
import { MessagePagerComponent } from './messages/message-pager/message-pager.component';
import { MessagePagerModule } from './messages/message-pager';
import {ChannelFormComponent} from "./channel-form/channel-form.component";
import {ChannelService} from "../shared/services/channel/channel.service";
import {ChannelListComponent} from "./channels/channel-list/channel-list.component";
import {MessageModule} from "./messages/message/message.module";
import {ChannelModule} from "./channels/channel/channel.module";
import {ChannelListModule} from "./channels/channel-list/channel-list.module";
import {ChannelFormModule} from "./channel-form/channel-form.module";


@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    MessageListComponent,
    ChannelListComponent,
    ChannelFormComponent
    MessageComponent,
    MessagePagerComponent,
    PagerItemComponent
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
