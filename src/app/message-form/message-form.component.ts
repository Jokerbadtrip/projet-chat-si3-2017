import { Component, OnInit } from "@angular/core";

import { MessageService } from "../../shared/services";
import { MessageModel } from "../../shared/models/MessageModel";
<<<<<<<
import { isNumber } from "util";
=======
import {ChanelModel} from "../../shared/models/ChannelModel";
>>>>>>>


@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.css"]
})
export class MessageFormComponent implements OnInit {
  static currentChannel: ChanelModel;
  public message: MessageModel;
<<<<<<<
  private threadId;
  private route: string;
=======

>>>>>>>



  constructor(private messageService: MessageService) {
    if (!MessageFormComponent.currentChannel) {
      MessageFormComponent.currentChannel = new ChanelModel(1);
    }
    this.message = new MessageModel(1, "Hello", "moi");
  }
  ngOnInit() {  }

  /**
   * Fonction pour envoyer un message.
   * L'envoi du message se fait à travers la methode sendMessage du service MessageService.
   * Cette méthode prend en paramètre la route pour envoyer un message (:id/messages avec id un entier correspondant à l'id du channel)
   * ainsi que le message à envoyer. Ce dernier correspond à l'objet MessageModel que l'utilisateur rempli à travers l'input.
   */
  sendMessage() {
    console.log("Click!");
    console.log("currentChannel:" + MessageFormComponent.currentChannel);
    const route = MessageFormComponent.currentChannel.id + "/messages";
    this.messageService.sendMessage(route, this.message);
    this.messageService.getMessages(route);
  }
<<<<<<<

  //called by html
  private setId(value : string){
    if(value && isNumber(value)){
      this.message.threadId = Number(value);
      console.log("setId = "+this.threadId);
    }
  }
  public getThreadId(){
    console.log("getThreadId = "+this.message.threadId);
    if(this.threadId){
       return this.threadId;
    }else{
      return "1";
    }
  }
=======



>>>>>>>
}
