import { Injectable } from "@angular/core";
import { Http, RequestOptions, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { URLSERVER } from "shared/constants/urls";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {ChanelModel} from "../../models/ChannelModel";

@Injectable()
export class ChannelService{

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

}
