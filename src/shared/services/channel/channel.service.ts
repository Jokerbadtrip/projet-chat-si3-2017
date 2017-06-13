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

  public createChannel(channel: ChanelModel) {

    console.log("createChannel:start");
    console.log("route:" + URLSERVER);
    console.log("channel:" + channel.id + " name:" + channel.name);

    const header = new Headers({"Content-Type": "application/json"});
    const options = new RequestOptions({headers: header});

    if (channel) {
      this.http.post(URLSERVER, channel, options).subscribe((response) => this.extractChannelAndGetChannel(response));
      this.http.get(URLSERVER).subscribe((response) => this.exctractAndUpdateChannelList(response));
    }
    console.log("createChannel:end");
  }


  public getChannels() {
    this.http.get(URLSERVER).subscribe((response) => this.exctractAndUpdateChannelList(response));
  }

  private extractChannelAndGetChannel(response: Response): ChanelModel {
    console.log("extractChannelAndGetChannel:start");
    console.log("response:" + response.json());
    console.log("channel response:" + response.json().name + " id:" + response.json().id);

    const id = response.json().id;
    const name = response.json().name;
    const createdAt = response.json().createdAt;
    const updatedAt = response.json().updatedAt;
    const channel = new ChanelModel(id, name, createdAt, updatedAt);
    console.log("extractChannelAndGetChannel:end");
    return channel;
  }

  private exctractAndUpdateChannelList(response) {
    console.log("exctractAndUpdateChannelList:start");
    console.log("response:" + response.json());
    const channelList = response.json() || [];
    this.channelList$.next(channelList);
    console.log("exctractAndUpdateChannelList:end");
  }


}
