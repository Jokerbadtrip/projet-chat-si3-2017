import { Component, OnInit } from "@angular/core";

import { ChanelModel } from "../../shared/models/ChannelModel";

@Component({
  selector: "app-thread-form",
  templateUrl: "./thread-form.component.html",
  styleUrls: ["./thread-form.component.css"]
})
export class ThreadFormComponent implements OnInit {

  public thread: ChanelModel;


  constructor() {
    this.thread = new ChanelModel(0 , "test");
  }

  ngOnInit() { }

}
