import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { MessageComponent, MessageListComponent, MessageModule } from "./messages";
import { MessageFormComponent } from "./message-form";
import { MessageService } from "../shared/services/message/message.service";
import { MessagePagerModule } from './messages/message-pager';
import { MessagePagerComponent } from './messages/message-pager/message-pager.component';
import { PagerItemComponent } from './messages/message-pager/pager-item-component';
import { PagerItemModule } from './messages/message-pager/pager-item.module';


@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    MessageListComponent,
    MessageComponent,
    MessagePagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MessagePagerModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
