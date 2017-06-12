import { Component, OnInit } from "@angular/core";


import { ChanelModel } from "../../../shared/models/ChannelModel";

@Component({
  selector: "app-thread-list",
  templateUrl: "./thread-list.component.html",
})
export class ThreadListComponent implements OnInit {

  public threadList: ChanelModel[];

  constructor() {

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

  }

}