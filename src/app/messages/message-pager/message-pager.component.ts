import { Component, OnInit } from "@angular/core";

import { MessageService } from "../../../shared/services";
import { MessageModel } from "../../../shared/models/MessageModel";
import { MessageListComponent } from '../message-list/message-list.component';

@Component({
  selector: "app-message-list",
  templateUrl: "./message-pager.component.html",
  styleUrls: ["./message-pager.component.css"]
})
export class MessagePagerComponent implements OnInit {

  public messageList: MessageListComponent;
  public pages: Page[];
  private route: string;

  constructor(messageList: MessageListComponent) {
    this.messageList = messageList;
    this.route = "page/1";//il devrait y avoir un id là
  }

  /**
   * Fonction ngOnInit.
   * Cette fonction est appelée après l'execution de tous les constructeurs de toutes les classes typescript.
   * Cette dernière s'avère très utile lorsque l'on souhaite attendre des valeurs venant de d'autres composants.
   * Le composant MessageComponent prend en @Input un message. Les @Input ne sont accessibles uniquement à partir du ngOnInit,
   * pas dans le constructeur.
   * En general, l'utilisation des services dans le NgOnInit est une bonne practice. Le constructeur ne doit servir qu'à
   * l'initialisation simple des variables. Pour plus d'information sur le ngOnInit, il y a un lien dans le README.
   */
  ngOnInit() {
    this.messageList.getMessage();
    
  }

}
class Page{
  static nbMax = 10;
  private currentIndice;
  private messages: MessageModel[];
  
  /**
   * function canAdd equals 0 if page is full
   * a new one should be created
   */
  private canAdd(){
    console.log("pager debug : canAdd");
    return (Page.nbMax>this.currentIndice)?0:1;
  }
  
  /**
   * 
   */
  addItem(messageModel: MessageModel){
    console.log("pager debug : addItem");
    if(!this.currentIndice) this.currentIndice=0;
    if(this.canAdd()>0){
      this.messages[this.currentIndice] = messageModel;
      return this.currentIndice++;
    }
     return -1;
  }
}
