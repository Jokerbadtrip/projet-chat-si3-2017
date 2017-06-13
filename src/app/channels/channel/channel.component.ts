
import { Component, Input, OnInit } from "@angular/core";

import { ChanelModel } from "../../../shared/models/ChannelModel";
import {ChannelService} from "../../../shared/services/channel/channel.service";

@Component({
  selector: "app-channel",
  templateUrl : "./channel.component.html",
  styleUrls : ["./channel.component.css"]
})

export class ChannelComponent implements OnInit {

 @Input() channel: ChanelModel;

 constructor(private channelService: ChannelService) {
  this.channel = new ChanelModel(9000, "channel_name");
 }


  ngOnInit(): void { }

}
