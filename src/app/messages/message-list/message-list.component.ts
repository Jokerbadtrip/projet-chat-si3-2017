import { Component, OnInit } from "@angular/core";

import { MessageService } from "../../../shared/services/index";
import { MessageModel } from "../../../shared/models/MessageModel";
import {Observable} from "rxjs/Rx";
import {ChannelService} from "../../../shared/services/channel/channel.service";
import {ChanelModel} from "../../../shared/models/ChannelModel";

@Component({
  selector: "app-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.css"],
})
export class MessageListComponent implements OnInit {

  public messageList: MessageModel[];
  private channel: ChanelModel;
  private pageNumber: number;
  private refresh: boolean;
  private timer = Observable.timer(2000, 5000);
  private subscription: any;


  constructor(private messageService: MessageService, private channelService: ChannelService) {
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
    this.subscription = this.timer.subscribe(() => this.getMessage());
    this.channelService.currentChannel.subscribe((currenChannel) => this.channel = currenChannel);
    this.messageService.pageNumber.subscribe((page) => this.pageNumber = page);

  }

  public getMessage() {

     if (this.channel) {
       this.messageService.getMessages(this.channel.id + "/messages?page=" + this.pageNumber);
       this.messageService.messageList$.subscribe((messages) => this.messageList = messages);
     }

  }


  _refresh(){
    if (this.refresh){
      this.timer.subscribe(() => this.getMessage());
    }else {
      this.subscription.unsubscribe();
    }
  }


}
