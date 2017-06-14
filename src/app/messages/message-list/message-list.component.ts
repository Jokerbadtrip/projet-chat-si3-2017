import { Component, OnInit } from "@angular/core";

import { MessageService } from "../../../shared/services/index";
import { MessageModel } from "../../../shared/models/MessageModel";
import {Observable} from "rxjs/Rx";
import {ChannelService} from "../../../shared/services/channel/channel.service";

@Component({
  selector: "app-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.css"],
})
export class MessageListComponent implements OnInit {

  public messageList: MessageModel[];


  constructor(private messageService: MessageService) {
    console.log("MessageListComponent constructor");
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

    const timer = Observable.timer(2000, 5000);
    timer.subscribe((t) => this.getMessage(t));

  }

  public getMessage(timer) {
     //console.log("messagelist :" + "getMessage");
     if (ChannelService.selectedChannel) {
       this.messageService.getMessages(ChannelService.selectedChannel.id + "/messages");
       this.messageService.messageList$.subscribe((messages) => this.messageList = messages);
     }
     //console.log("nombre de messages dans la liste :" + this.messageList.length);
  }


}
