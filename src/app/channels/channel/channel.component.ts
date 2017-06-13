
import { Component, Input, OnInit } from "@angular/core";

import { ChanelModel } from "../../../shared/models/ChannelModel";

@Component({
  selector: "app-thread",
  templateUrl : "./channel.component.html",
  styleUrls : ["./channel.component.css"]
})

export class ChannelComponent implements OnInit {

 @Input() channel: ChanelModel;

 constructor() {
  this.channel = new ChanelModel(0, "thread_name", "date_hour", "date_hour");
 }


  ngOnInit(): void {
  }




}
