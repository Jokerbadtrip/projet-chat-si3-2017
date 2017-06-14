
import { Component, Input, OnInit } from "@angular/core";

import { ChanelModel } from "../../../shared/models/ChannelModel";
import {ChannelService} from "../../../shared/services/channel/channel.service";
import {MessageService} from "../../../shared/services/message/message.service";
import {MessageFormComponent} from "../../message-form/message-form.component";

@Component({
  selector: "app-channel",
  templateUrl : "./channel.component.html",
  styleUrls : ["./channel.component.css"]
})

export class ChannelComponent implements OnInit {

 @Input() channel: ChanelModel;

 constructor(private channelService: ChannelService, private messageService: MessageService) {
  this.channel = new ChanelModel(0, "channel_name");
 }


  ngOnInit(): void { }

  selectChannel() {
   console.log("Click!");
   const route = this.channel.id + "/messages";
   ChannelService.selectedChannel = this.channel;
   this.messageService.getMessages(route);
  }

}
