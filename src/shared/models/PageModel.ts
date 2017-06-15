
import { MessageModel } from "./MessageModel";
import { Component } from "@angular/core";

export class PageModel {
  
  static nbPage;
  static nbMax = 20;
  private PageNumber;
  private currentIndice;
  private messages: MessageModel[];

  constructor() {
    if(PageModel.nbPage==null) PageModel.nbPage = 0;
    this.currentIndice = Number(PageModel.nbPage);
    PageModel.nbPage++;
  }
  
  /**
   * function canAdd equals 0 if PagerItem is full
   * a new one should be created
   */
  private canAdd() {
    console.log("PagerItem debug : canAdd");
    return (PageModel.nbMax>this.currentIndice)?0:1;
  }

  addItem(messageModel: MessageModel){
    console.log("PagerItem debug : addItem");
    if(!this.currentIndice) this.currentIndice=0;
    if(this.canAdd()>0){
      this.messages[this.currentIndice] = messageModel;
      return this.currentIndice++;
    }
     return -1;
  }
}