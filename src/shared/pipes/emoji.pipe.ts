import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name: "emoji"})
export class EmojiPipe implements PipeTransform {


  transform(value: string) {
    let words: string[];
    words = value.split(" ");
    let finalWord = "";

    for (let i = 0; i < words.length; i++){
      if (words[i] === "<3") {
        words[i] = "❤";
      }else if (words[i] === ":)") {
        words[i] = "😊";
      }else if (words[i] === ":'(") {
        words[i] = "😭";
      }else if (words[i] === ":(") {
        words[i] = "☹";
      }else if (words[i] === ":D") {
        words[i] = "😂";
      }else if (words[i] === ":p" || words[i] === ":P") {
        words[i] = "😛";
      }else if (words[i] === ":o" || words[i] === ":O") {
        words[i] = "😮";
      }

      finalWord = finalWord + words[i] + " ";
    }
    return finalWord;
  }


}
