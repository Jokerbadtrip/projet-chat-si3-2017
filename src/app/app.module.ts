import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { MessageComponent, MessageListComponent, MessageModule } from "./messages";
import { MessageFormComponent } from "./message-form";

import { MessageService } from "../shared/services";
import { MessagePagerModule } from './messages/message-pager';
import { MessagePagerComponent } from './messages/message-pager/message-pager.component';
import { PagerItemComponent } from './messages/message-pager/pager-item-component';
import { PagerItemModule } from './messages/message-pager/pager-item.module';

import {ChannelFormComponent} from "./channel-form/channel-form.component";
import {ChannelService} from "../shared/services/channel/channel.service";



@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    MessageListComponent,
    MessageComponent,

    MessagePagerComponent,
    PagerItemComponent,

    ChannelFormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [MessageService, ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
