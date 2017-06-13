import { Injectable } from "@angular/core";
import { Http, RequestOptions, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { URLSERVER } from "shared/constants/urls";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {ChanelModel} from "../../models/ChannelModel";

@Injectable()
export class ChannelService {

  /**
   * Url pour accéder aux données. L'url est commun à toutes les fonctions du service.
   * Il permet d'accéder aux channels. À partir de cet url, vous pourrez accéder aux messages.
   * La documentation des methodes du service permet d'avoir plus d'information concernant la façon d'accèder aux messages.
   */
  private url: string;
  public channelList$: ReplaySubject<ChanelModel[]>;

  constructor(private http: Http) {
    this.url = URLSERVER;
    this.channelList$ = new ReplaySubject(1);
    this.channelList$.next([new ChanelModel(1)]);
  }

  public createChannel(route: string, channel: ChanelModel) {

    console.log("createChannel:start");
    console.log("route:" + route);
    console.log("channel:" + channel.id);

    const finalUrl = URLSERVER + route;
    const header = new Headers({"Content-Type": "application/json"});
    const options = new RequestOptions({headers: header});

    if (route && channel) {
      this.http.post(finalUrl, options).subscribe((response) => this.extractChannelAndGetChannel(response, route));
      this.http.get(finalUrl).subscribe((response) => this.exctractAndUpdateChannelList(response));
    }
    console.log("createChannel:end");
  }


  public getChannels(route: string) {
    const finalUrl = URLSERVER + route;
    this.http.get(finalUrl).subscribe((response) => this.exctractAndUpdateChannelList(response));
  }

  private extractChannelAndGetChannel(response: Response, route: string): ChanelModel {
    console.log("extractChannelAndGetChannel:start");
    console.log("response:" + response.json());

    const id = response.json().id;
    const name = response.json().name;
    const createdAt = response.json().createdAt;
    const updatedAt = response.json().updatedAt;
    const channel = new ChanelModel(id, name, createdAt, updatedAt);
    console.log("extractChannelAndGetChannel:end");
    return channel;
  }

  private exctractAndUpdateChannelList(response) {
    console.log("exctractAndUpdateChannelList");
    const channelList = response.json() || [];
    this.channelList$.next(channelList);
  }

}
