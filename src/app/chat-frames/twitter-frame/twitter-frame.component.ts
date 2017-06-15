import {Component, Input, OnInit} from "@angular/core";
import {MessageModel} from "../../../shared/models/MessageModel";
@Component({
  selector: "app-twitter-frame",
  templateUrl: "./twitter-frame.component.html",
  styleUrls: ["twitter-frame.component.css"]
})

export class TwitterFrameComponent implements OnInit {


  @Input() message: MessageModel;




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
        return words[i];
      }
    }
  }

}
