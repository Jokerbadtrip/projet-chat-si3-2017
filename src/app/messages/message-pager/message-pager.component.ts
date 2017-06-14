import { Component, OnInit, Input } from "@angular/core";

import { MessageService } from "../../../shared/services";
import { MessageModel } from "../../../shared/models/MessageModel";
import { PageModel } from '../../../shared/models/PageModel';
import { MessageListComponent } from "../message-list/message-list.component";
import { PagerItemComponent } from './pager-item-component';

@Component({
  selector: "app-message-pager",
  templateUrl: "./message-pager.component.html",
  styleUrls: ["./message-pager.component.css"]
})
export class MessagePagerComponent implements OnInit {
  public pages: PageModel[];
  
  
  static pageIndice;
  
  private messageList: MessageModel[];
  private route: string;

  constructor(private messageService : MessageService) {
    this.route = "page/1";//il devrait y avoir un id là
    MessagePagerComponent.pageIndice = 1;
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
   this.buildPagerItem();
  }
  
  public buildPagerItem(){
    
     //first request 
    this.requestMessages();
    while(this.messageList.length>0){
      console.log("page number = " + this.pages.length);
      this.getMessageList();//fills one page
      this.requestMessages();
    }
  }
  private requestMessages() {
     this.messageService.messageList$.subscribe((messages) => this.messageList = messages);
     console.log("nombre de messages dans la liste :" + this.messageList.length);
  }
  private getMessageList() {
     console.log("message-pager :" + "getMessageList");
     for(let i = 0; i < this.messageList.length; i++) {
       if (this.messageList[i] != null) {
          if (this.pages[MessagePagerComponent.pageIndice].addItem(this.messageList[i]) < 0) {
            MessagePagerComponent.pageIndice++;
            let res = this.pages[MessagePagerComponent.pageIndice].addItem(this.messageList[i]);
            if (res < 0) console.log("problem retrieving messages");
          }
       }else{
         this.messageList = [];
       }
     }
    
    console.log("getMessageList - end");
  }

}

