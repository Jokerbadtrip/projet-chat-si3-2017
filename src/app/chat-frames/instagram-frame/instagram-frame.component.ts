import {Component, Input, OnInit} from "@angular/core";
import {MessageModel} from "../../../shared/models/MessageModel";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: "app-instagram-frame",
  templateUrl: "./instagram-frame.component.html",
  styleUrls: ["instagram-frame.component.css"]
})

export class InstagramFrameComponent implements OnInit {


  @Input() message: MessageModel;


  constructor() {
  }

  ngOnInit(): void {
  }

  hasLink() {
    const urlType = /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\/([A-Za-z0-9-_]+)/;
    return urlType.test(this.message.content);

  }


  getLink() {
    let words: string[];
    words = this.message.content.split(" ");
    const urlType = /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\/([A-Za-z0-9-_]+)/;
    for (let i = 0; i < words.length; i++) {

      if (urlType.test(words[i])) {
        const string = words[i] + "/embed";
        return string;
      }
    }
  }

}
/**
 * Created by MSI on 15/06/2017.
 */
