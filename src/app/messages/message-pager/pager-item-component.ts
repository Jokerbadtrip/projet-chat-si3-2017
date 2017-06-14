
import { MessageModel } from '../../../shared/models/MessageModel';
import { PageModel } from '../../../shared/models/PageModel';
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-pager-item",
  templateUrl: "./pager-item.component.html",
  styleUrls: ["./pager-item.component.css"]
})

export class PagerItemComponent {
  @Input() page: PageModel;
  private pageIndice: number;

  constructor(page: PageModel) {
    console.log("PagerItemComponent constructor");
    this.pageIndice = PageModel.nbPage;
    this.page = page;
  }

}