import { Component, OnInit } from "@angular/core";

import { MessageService } from "../../shared/services";
import { MessageModel } from "../../shared/models/MessageModel";
import { isNumber } from 'util';

@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.css"]
})
export class MessageFormComponent implements OnInit {
  static DEFAULT_TRHEAD_ID = 1;
  public message: MessageModel;
  private route: string;
  private threadId: number;
  public static instance: MessageFormComponent;

  constructor(private messageService: MessageService) {
    this.message = new MessageModel(MessageFormComponent.DEFAULT_TRHEAD_ID, "sexe", ">.<");
    this.route = "/messages";
    this.threadId = MessageFormComponent.DEFAULT_TRHEAD_ID;
    MessageFormComponent.instance = this;
    console.log("route = "+this.route+ " threadId =" + this.threadId);
  }
  ngOnInit() {  }

  /**
   * Fonction pour envoyer un message.
   * L'envoi du message se fait à travers la methode sendMessage du service MessageService.
   * Cette méthode prend en paramètre la route pour envoyer un message (:id/messages avec id un entier correspondant à l'id du channel)
   * ainsi que le message à envoyer. Ce dernier correspond à l'objet MessageModel que l'utilisateur rempli à travers l'input.
   */
  sendMessage() {
    this.setId(document.getElementById("threadId").getAttribute("text"));
    console.log("Click!"+this.threadId+ "= "+ document.getElementById("threadId").getAttribute("text") + this.route);
    this.messageService.sendMessage(this.threadId+this.route, this.message);
  }

  //called by html
  setId(value : string){
    if(value && isNumber(value)){
      this.threadId = Number(value);
      console.log("thread id = "+this.threadId);
    }
  }
  public getThreadId(){
    console.log("getThreadId = "+this.threadId);
    if(this.threadId){
       return this.threadId;
    }else{
      return MessageFormComponent.DEFAULT_TRHEAD_ID;
    }
  }
  
  static getInstance(){
    return MessageFormComponent.instance;
  }
}
