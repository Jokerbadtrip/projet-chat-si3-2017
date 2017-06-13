import { Component, OnInit } from "@angular/core";

import { MessageService } from "../../shared/services";
import { MessageModel } from "../../shared/models/MessageModel";

@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.css"]
})
export class MessageFormComponent implements OnInit {

  static currentChannel: string;

  public message: MessageModel;
  private route: string;



  constructor(private messageService: MessageService) {
    if (!MessageFormComponent.currentChannel) {
      MessageFormComponent.currentChannel = "1/messages";
    }
    this.message = new MessageModel(1, "Hello", "moi");
    this.route = MessageFormComponent.currentChannel;
  }

  ngOnInit() { }

  /**
   * Fonction pour envoyer un message.
   * L'envoi du message se fait à travers la methode sendMessage du service MessageService.
   * Cette méthode prend en paramètre la route pour envoyer un message (:id/messages avec id un entier correspondant à l'id du channel)
   * ainsi que le message à envoyer. Ce dernier correspond à l'objet MessageModel que l'utilisateur rempli à travers l'input.
   */
  sendMessage() {
    console.log("Click!");
    console.log("route:" + this.route);
    console.log("currentChannel:" + MessageFormComponent.currentChannel);
    this.messageService.sendMessage(MessageFormComponent.currentChannel, this.message);
    this.messageService.getMessages(MessageFormComponent.currentChannel);
  }



}
