import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  public title: string;
  public channel: string;

  constructor() {
    this.title = "Chat";
    this.channel = "Channel";
    Observable.create();
  }
}
