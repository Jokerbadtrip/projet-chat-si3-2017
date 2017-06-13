import { Component, OnInit } from "@angular/core";

import { MessageService } from "../../shared/services";
import { MessageModel } from "../../shared/models/MessageModel";
import { isNumber } from "util";


@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.css"]
})
export class MessageFormComponent implements OnInit {
  static DEFAULT_TRHEAD_ID = 1;
  public message: MessageModel;
  private route: string;
  public static instance: MessageFormComponent;

  constructor(private messageService: MessageService) {
    this.message = new MessageModel(Number(document.getElementById("#threadId").textContent)?
                                     Number(document.getElementById("#threadId").textContent) :
                                     MessageFormComponent.DEFAULT_TRHEAD_ID, "sexe", ">.<");
    this.route = "/messages";
    MessageFormComponent.instance = this;
    console.log("route = "+this.route+ " threadId =" + this.message.threadId);
  }
  ngOnInit() {  }

  /**
   * Fonction pour envoyer un message.
   * L'envoi du message se fait à travers la methode sendMessage du service MessageService.
   * Cette méthode prend en paramètre la route pour envoyer un message (:id/messages avec id un entier correspondant à l'id du channel)
   * ainsi que le message à envoyer. Ce dernier correspond à l'objet MessageModel que l'utilisateur rempli à travers l'input.
   */
  sendMessage() {
    this.setId(document.getElementById("#threadId").getAttribute("text"));
    alert("Click!"+this.message.threadId+ "= "+ document.getElementById("#threadId").getAttribute("text") + this.route);
    this.messageService.sendMessage(this.message.threadId+this.route, this.message);
  }

  //called by html
  private setId(value : string){
    if(value && isNumber(value)){
      this.message.threadId = Number(value);
      console.log("thread id = "+this.message.threadId);
    }
  }
  public getThreadId(){
    console.log("getThreadId = "+this.message.threadId);
    if(this.message.threadId){
       return this.message.threadId;
    }else{
      return MessageFormComponent.DEFAULT_TRHEAD_ID;
    }
  }
}
