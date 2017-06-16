import {Component, Input, OnInit} from "@angular/core";
import {MessageModel} from "../../../shared/models/MessageModel";
import {MessageService} from "../../../shared/services/message/message.service";
@Component({
  selector: "app-youtube-frame",
  templateUrl: "./youtube-frame.component.html",
  styleUrls: ["./youtube-frame.component.css"]
})

export class YoutubeFrameComponent implements OnInit {

  @Input() currentMessage: MessageModel;
  private watchingVid: boolean;


  constructor(private messageService: MessageService) {
  }

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
        const watchv = "watch?v=";
        const embed = "embed/";
        words[i] = words[i].replace(watchv, embed);
        return words[i];
      }
    }
  }


}
