

import {Component, OnInit} from "@angular/core";
import {MessageService} from "../../../shared/services/message/message.service";
import {ChannelService} from "../../../shared/services/channel/channel.service";
@Component({

  selector: "app-message-history",
  templateUrl: "./message-history.component.html",
  styleUrls: ["./message-history.component.css"]

})

export class MessageHistoryComponent implements OnInit {




  public pageNumber: number;

  constructor(private messageService: MessageService){
    this.pageNumber = 0;
  }




  ngOnInit(): void {

  }

  requestPreviousPage(){

    if (this.pageNumber !== 0) {
      this.messageService.getMessages(ChannelService.selectedChannel.id + "/messages?page=" + this.pageNumber);
    }

  }

  requestNextPage() {
    this.messageService.getMessages(ChannelService.selectedChannel.id + "/messages?page=" + this.pageNumber);
  }


}
