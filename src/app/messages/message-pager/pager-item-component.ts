
import { MessageModel } from '../../../shared/models/MessageModel';
import { Component } from "@angular/core";

@Component({
  selector: "app-pager-item",
  templateUrl: "./pager-item.component.html",
  styleUrls: ["./pager-item.component.css"]
})

export class PagerItemComponent {
  public static nbpages;
  private pageIndice : number;

  constructor() {
    this.pageIndice = 1;
  }

}