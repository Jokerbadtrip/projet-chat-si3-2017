import {Component, Input, OnInit} from "@angular/core";
import {MessageModel} from "../../../shared/models/MessageModel";
@Component({
  selector: "app-youtube-frame",
  templateUrl: "./youtube-frame.component.html",
  styleUrls: ["./youtube-frame.component.css"]
})

export class YoutubeFrameComponent implements OnInit {

  @Input() currentMessage: MessageModel;




  ngOnInit(): void {

  }

  public hasLink() {
    const urlYt = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;
    return urlYt.test(this.currentMessage.content);
  }
  public getLink() {
    const urlYt = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;
    const words = this.currentMessage.content.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (urlYt.test(words[i]) ) {
        words[i].replace("watch\?v=", "embed\/");
        return words[i];
      }
    }
  }

}
