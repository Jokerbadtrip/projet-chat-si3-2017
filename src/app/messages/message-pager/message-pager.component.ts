import { Component, OnInit } from "@angular/core";

import { MessageService } from "../../../shared/services";
import { MessageModel } from "../../../shared/models/MessageModel";
import { MessageListComponent } from "../message-list/message-list.component";
import { PagerItem } from './pager-item-component';

@Component({
  selector: "app-message-pager",
  templateUrl: "./message-pager.component.html",
  styleUrls: ["./message-pager.component.css"]
})
export class MessagePagerComponent implements OnInit {

  public messageList: MessageListComponent;
  public pages: PagerItem[];
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

