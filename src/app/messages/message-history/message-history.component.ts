

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




  static pageNumber: number;
  private channel: ChanelModel;

  constructor(private messageService: MessageService, private channelService: ChannelService){
    MessageHistoryComponent.pageNumber = 0;
  }




  ngOnInit(): void {
    this.channelService.currentChannel.subscribe((currentChannel) => this.channel = currentChannel);
  }

  requestPreviousPage() {

    if (MessageHistoryComponent.pageNumber !== 0) {
      MessageHistoryComponent.pageNumber--;
      this.messageService.getMessages(this.channel.id + "/messages?page=" + MessageHistoryComponent.pageNumber);
    }

  }

  requestNextPage() {
    MessageHistoryComponent.pageNumber++;
    this.messageService.getMessages(this.channel.id + "/messages?page=" + MessageHistoryComponent.pageNumber);
  }


}
