
import { Component, Input, OnInit } from "@angular/core";

import { ChanelModel } from "../../../shared/models/ChannelModel";

@Component({
  selector: "app-thread",
  templateUrl : "./thread.component.html",
  styleUrls : ["./thread.component.css"]
})

export class ThreadComponent implements OnInit{

 @Input thread : ChanelModel;

 constructor(){
   this.thread = new ChanelModel(0, "thread_name", "thread_description", "date_hour", "date_hour");
 }


  ngOnInit(): void {
  }




}
