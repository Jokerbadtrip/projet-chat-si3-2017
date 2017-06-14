import { MessageService } from "../shared/services";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { MessageComponent, MessageListComponent, MessageModule } from "./messages";
import { MessageFormComponent } from "./forms/message-form";
import { PagerItemComponent } from "./messages/message-pager/pager-item-component";
import { MessagePagerComponent } from "./messages/message-pager/message-pager.component";
import {ChannelFormComponent} from "./forms/channel-form/channel-form.component";
import {ChannelService} from "../shared/services/channel/channel.service";
import {ChannelListComponent} from "./channels/channel-list/channel-list.component";
import {ChannelModule} from "./channels/channel/channel.module";
import {FormComponent} from "./forms/forms.component";



@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    MessageListComponent,
    ChannelListComponent,
    ChannelFormComponent,
    MessageComponent,
    MessagePagerComponent,
    PagerItemComponent,
    FormComponent
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
