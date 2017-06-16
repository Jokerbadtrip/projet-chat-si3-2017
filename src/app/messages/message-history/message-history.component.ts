

import {Component, OnInit} from "@angular/core";
import {MessageService} from "../../../shared/services/message/message.service";
import {ChannelService} from "../../../shared/services/channel/channel.service";
import {ChanelModel} from "../../../shared/models/ChannelModel";
@Component({

  selector: "app-message-history",
  templateUrl: "./message-history.component.html",
  styleUrls: ["./message-history.component.css"]

})

export class MessageHistoryComponent implements OnInit {




  private pageNumber: number;
  private channel: ChanelModel;

  constructor(private messageService: MessageService, private channelService: ChannelService){
    this.pageNumber = 0;
  }




  ngOnInit(): void {
    this.channelService.currentChannel.subscribe((currentChannel) => this.channel = currentChannel);
    this.messageService.pageNumber.subscribe((page) => this.pageNumber = page);
  }

  requestPreviousPage() {

    if (this.pageNumber !== 0) {
      this.messageService.decrementPage();
      this.messageService.getMessages(this.channel.id + "/messages?page=" + this.pageNumber);
    }

  }

  requestNextPage() {
    this.messageService.incrementPage();
    this.messageService.getMessages(this.channel.id + "/messages?page=" + this.pageNumber);
  }


}
