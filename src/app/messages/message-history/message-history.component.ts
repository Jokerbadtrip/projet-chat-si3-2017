

import {Component, OnInit} from "@angular/core";
import {MessageService} from "../../../shared/services/message/message.service";
import {ChannelService} from "../../../shared/services/channel/channel.service";
@Component({

  selector: "app-message-history",
  templateUrl: "./message-history.component.html",
  styleUrls: ["./message-history.component.css"]

})

export class MessageHistoryComponent implements OnInit {




  static pageNumber: number;

  constructor(private messageService: MessageService){
    MessageHistoryComponent.pageNumber = 0;
  }




  ngOnInit(): void {

  }

  requestPreviousPage(){

    if (MessageHistoryComponent.pageNumber !== 0) {
      MessageHistoryComponent.pageNumber--;
      this.messageService.getMessages(ChannelService.selectedChannel.id + "/messages?page=" + MessageHistoryComponent.pageNumber);
    }

  }

  requestNextPage() {
    MessageHistoryComponent.pageNumber++;
    this.messageService.getMessages(ChannelService.selectedChannel.id + "/messages?page=" + MessageHistoryComponent.pageNumber);
  }


}
