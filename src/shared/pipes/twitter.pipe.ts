

import {Pipe, PipeTransform} from "@angular/core";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
@Pipe({
  name: "twitter"
})

export class TwitterPipe implements PipeTransform {


  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string): string {

    const urlType = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)\/([a-zA-Z0-9_]+)\/([0-9]+)/;
    const twitterURL = "";
    return twitterURL;



  }





}
