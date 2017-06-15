import {Component, Input, OnInit} from "@angular/core";
import {MessageModel} from "../../../shared/models/MessageModel";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: "app-twitter-frame",
  templateUrl: "./twitter-frame.component.html",
  styleUrls: ["twitter-frame.component.css"]
})

export class TwitterFrameComponent implements OnInit {


  @Input() message: MessageModel;


  constructor(private sanatizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  hasLink() {
    const urlType = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)\/([a-zA-Z0-9_]+)\/([0-9]+)/;
    return urlType.test(this.message.content);

  }


  getLink() {
    let words: string[];
    words = this.message.content.split(" ");
    const urlType = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)\/([a-zA-Z0-9_]+)\/([0-9]+)/;


    for (let i = 0; i < words.length; i++) {

      if (urlType.test(words[i])) {
        const string = "http://twitframe.com/show?url=" + words[i];
        string.replace(":", "%3A");
        string.replace("/", "%2F");
        string.replace("https", "http");
        return string;
      }
    }
  }

}
