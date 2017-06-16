import { Injectable } from "@angular/core";
import { Http, RequestOptions, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { MessageModel } from "../../models/MessageModel";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { URLSERVER } from "../../constants/urls";
import {ChannelService} from "../channel/channel.service";
import {forEach} from "@angular/router/src/utils/collection";
import {ChanelModel} from "../../models/ChannelModel";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class MessageService {

  /**
   * Url pour accéder aux données. L'url est commun à toutes les fonctions du service.
   * Il permet d'accéder aux channels. À partir de cet url, vous pourrez accéder aux messages.
   * La documentation des methodes du service permet d'avoir plus d'information concernant la façon d'accèder aux messages.
   */
  private url: string;

  /**
   * MessageList$ est un type d'Observable particulier appelé ReplaySubject.
   * MessageList$ est un flux d'évenements qui stock la liste des messages. A chaque fois que l'on fait une requète
   * pour récupérer la liste des messages, messageList$ va pousser cette nouvelle liste dans son flux pour permettre
   * aux composants qui l'écoutent de récupérer les messages. Pour plus d'infos sur les observables, voir le README.md du projet
   * dans lequel vous trouverez une première explication sur les observables ainsi qu'une vidéo tutoriel.
   */
  public messageList$: ReplaySubject<MessageModel[]>;
  public pageNumber: BehaviorSubject<number>;

  constructor(private http: Http) {
    this.url = URLSERVER;
    this.messageList$ = new ReplaySubject(1);
    this.messageList$.next([new MessageModel()]);
    this.pageNumber = new BehaviorSubject(1);
  }

  /**
   * Fonction getMessage.
   * Cette fonction permet de récupérer la liste des messages pour un channel donné. Elle prend en parametre:
   * - route: La route. C'est la fin de l'url. Elle sera concaténée à l'attribut this.url pour former l'url complète.
   *          Pour l'envoie des messages la route doit avoir la structure suivante: :id/messages avec ":id" étant
   *          un nombre entier correspondant à l'identifiant (id) du channel.
   * Exemple de route: 1/messages
   * @param route
   * @returns {Observable<R>}
   */
  public getMessages(route: string) {
    const finalUrl = this.url + route;
    this.http.get(finalUrl)
      .subscribe((response) => this.extractAndUpdateMessageList(response));
  }


  public resetPage() {
    this.pageNumber.next(0);
  }

  public incrementPage() {
    this.pageNumber.next(this.pageNumber.getValue() + 1);
  }

  public decrementPage() {
    this.pageNumber.next(this.pageNumber.getValue() - 1);
  }
  /**
   * Fonction sendMessage.
   * Cette fonction permet l'envoi d'un message. Elle prend en paramêtre:
   * - route: La route est la fin de l'url. Elle sera concaténée à l'attribut this.url pour former l'url complète. Pour
   *          l'envoie des messages la route doit avoir la structure suivante: :id/messages avec ":id" étant un nombre
   *          entier correspondant à l'identifiant (id) du channel.
   *          Exemple de route: 1/messages
   * - message: Le message à envoyer. Ce message est de type MessageModel.
   * @param route
   * @param message
   */
  public sendMessage(route: string, message: MessageModel) {
    const finalUrl = URLSERVER + route;
    const header = new Headers({"Content-Type": "application/json"});
    const options = new RequestOptions({headers: header});

    if (route && message) {
      this.http.post(finalUrl, message, options).subscribe((response) => this.extractMessageAndGetMessages(response, route));
      this.http.get(finalUrl).subscribe((response) => this.extractAndUpdateMessageList(response));
    }
  }
  private spotChannel(message: MessageModel) {
    let mots: string[];
    let channel: number[];
    let nombre = 0;
    mots = message.content.split(" ");
    let i = 0;
    while (i < mots.length && mots[i].charAt(0) === "/") {
      nombre++;
      i++;
    }
    channel = new Array(nombre);
    i = 0;
    while (i < mots.length && mots[i].charAt(0) === "/") {
      channel[i] = +mots[i].substring(1);
      i++;
    }
    return channel;
  }
  private spotMessage(i: number, message: MessageModel): string {
    let mots: string[];
    mots = message.content.split(" ");
    let messageFin = "";
    for (i; i < mots.length; i++) {
      console.log(i);
      console.log(mots[i]);
      messageFin = messageFin + mots[i] + " ";
    }
    return messageFin;
  }


  public sendMessage2(route: string, message: MessageModel) {
    let channel: number[];
    channel = this.spotChannel(message);
    if (channel) {
      message.content = this.spotMessage(channel.length, message);
    }
    console.log(message.content);
    this.sendMessage(route, message);
    if (channel) {
      for (let i = 0; i < channel.length; i++) {
        this.sendMessage(channel[i] + "/messages", message);
      }
    }
  }




  /**
   * Fonction extractAndUpdateMessageList.
   * Cette fonction permet d'extraire la liste des messages de la 'response' reçue et ensuite de mettre à jour la liste
   * des message dans l'observable messageList$.
   * Elle est appelée dans la fonction getMessages et permet de directement récuperer une liste de MessageModel. Pour récupérer
   * les données de la reponse, il suffit d'appeler la fonction .json() qui retourne le body de la réponse.
   * @param response
   */
  extractAndUpdateMessageList(response: Response) {



    if (!response.ok) {console.log("status = " + response.statusText); }

    // Plus d'info sur Response ou sur la fonction .json()? si tu utilises Webstorm,
    // fait CTRL + Click pour voir la déclaration et la documentation
    const messageList = response.json() || []; // ExtractMessage: Si response.json() est undefined ou null,
    // messageList prendra la valeur tableau vide: [];
    this.messageList$.next(messageList); // On pousse les nouvelles données dans l'attribut messageList$

  }

  /**
   * Fonction extractMessage.
   * Cette fonction permet d'extraire les données reçues à travers les requêtes HTTP. Elle est appelée dans la fonction
   * sendMessage et permet de directement récuperer un MessageModel.
   * Elle va également faire un nouvel appel pour récupérer la liste complete des messages pour pouvoir mettre à jour la
   * liste des messages dans les composants.
   * @param response
   * @param route
   * @returns {any|{}}
   */
  private extractMessageAndGetMessages(response: Response, route: string): MessageModel {

    if (!response.ok){console.log("status = " + response.statusText); }

    const id = response.json().id;
    const content = response.json().content;
    const fromWho = response.json().from;
    const created_at = response.json().createdAt;
    const updated_at = response.json().updatedAt;
    const threadId = response.json().threadId;
    const messageModel = new MessageModel(id, content, fromWho, created_at, updated_at);
    console.log("extractMessageAndGetMessages " + threadId);
    return messageModel;

  }
}
