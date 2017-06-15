

import {Pipe, PipeTransform} from "@angular/core";
import {DomSanitizer, SafeHtml, SafeUrl} from "@angular/platform-browser";
@Pipe({
  name: "youtube"
})

export class YoutubePipe implements PipeTransform {


  constructor(private sanitizer: DomSanitizer) {
  }


  transform(value: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }





}
