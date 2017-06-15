import {Component, Input, OnInit} from "@angular/core";
import {MessageModel} from "../../../shared/models/MessageModel";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: "app-image-frame",
  templateUrl: "./image-frame.component.html",
  styleUrls: ["image-frame.component.css"]
})

export class ImageFrameComponent implements OnInit {


  @Input() message: MessageModel;


  constructor() {
  }

  ngOnInit(): void {
  }

  hasLink() {
    const urlType = /(https?:\/\/.*\.(?:png|jpg|bmp|gif))/;
    return urlType.test(this.message.content);

  }


  getLink() {
    let words: string[];
    words = this.message.content.split(" ");
    const urlType = /(https?:\/\/.*\.(?:png|jpg|bmp|gif))/;
    for (let i = 0; i < words.length; i++) {

      if (urlType.test(words[i])) {
        const string = words[i];
        return string;
      }
    }
  }

}

