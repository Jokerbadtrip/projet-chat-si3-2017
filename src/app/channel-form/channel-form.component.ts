import { Component, OnInit } from "@angular/core";
import {ChanelModel} from "../../shared/models/ChannelModel";

@Component({
  selector: "app-channel-form",
  templateUrL : "./channel-form.component.html",
  styleUrls : ["./channel-form.component.css"]
})

export class ChannelFormComponent implements OnInit{

  public channel: ChanelModel;
  private route: string;

  constructor(private channelService: ChannelService){
    this.channel = new ChanelModel(1);
    this.route = "1/channels";
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  sendMessage() {
    console.log("Click!");
    this.channelService.createChannel(this.route, this.channel);
  }


}
