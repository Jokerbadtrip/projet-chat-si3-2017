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
  private DEFAULT_TRHEAD_ID = 1;
  public message: MessageModel;
  private threadId;
  private route: string;

  constructor(private messageService: MessageService) {
    this.message = new MessageModel(1, "sexe", ">.<");
    this.route = "/messages";
    this.threadId = 1;
    console.log("route = " + this.route + " threadId =" + this.threadId);
  }
  ngOnInit() {  }

  /**
   * Fonction pour envoyer un message.
   * L'envoi du message se fait à travers la methode sendMessage du service MessageService.
   * Cette méthode prend en paramètre la route pour envoyer un message (:id/messages avec id un entier correspondant à l'id du channel)
   * ainsi que le message à envoyer. Ce dernier correspond à l'objet MessageModel que l'utilisateur rempli à travers l'input.
   */
  sendMessage() {
    //document.getElementById("#threadId").getAttribute("text")
    this.setId("1");
    this.messageService.sendMessage(this.threadId+this.route, this.message);
  }

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
}
