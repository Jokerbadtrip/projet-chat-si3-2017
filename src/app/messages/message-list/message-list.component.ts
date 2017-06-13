import { Component, OnInit } from "@angular/core";

import { MessageService } from "../../../shared/services/index";
import { MessageModel } from "../../../shared/models/MessageModel";
import { MessageFormComponent } from "../../message-form";

@Component({
  selector: "app-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.css"],
})
export class MessageListComponent implements OnInit {

  public messageList: MessageModel[];
  private messageService: MessageService;
  private route: string;

  constructor(messageService: MessageService) {
    this.messageService = messageService;
     console.log("messageListControler");
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
    console.log("message list init");
    var id ="1";
    if(document.getElementById("#threadId")!=null){
      id = document.getElementById("#threadId").textContent;
      console.log("threadId = " + id);
    }


    this.route = id +"/messages";
    console.log("messagelist :"+this.route);
    this.messageService.getMessages(this.route);
    this.getMessage();
  }
  public getMessage(){
     console.log("messagelist :"+"getMessage");
     this.messageService.messageList$.subscribe((messages) => this.messageList = messages);
     console.log("nombre de messages dans la liste :" + this.messageList.length);
  }


}
