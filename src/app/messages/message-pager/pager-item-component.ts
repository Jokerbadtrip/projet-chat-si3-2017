
import { MessageModel } from '../../../shared/models/MessageModel';

export class PagerItem {
  static nbMax = 10;
  private PageNumber;
  private currentIndice;
  private messages: MessageModel[];

  constructor(currentIndice : number) {
    this.currentIndice = currentIndice;
  }
  
  /**
   * function canAdd equals 0 if PagerItem is full
   * a new one should be created
   */
  private canAdd() {
    console.log("PagerItemr debug : canAdd");
    return (PagerItem.nbMax>this.currentIndice)?0:1;
  }

  addItem(messageModel: MessageModel){
    console.log("PagerItemr debug : addItem");
    if(!this.currentIndice) this.currentIndice=0;
    if(this.canAdd()>0){
      this.messages[this.currentIndice] = messageModel;
      return this.currentIndice++;
    }
     return -1;
  }
}