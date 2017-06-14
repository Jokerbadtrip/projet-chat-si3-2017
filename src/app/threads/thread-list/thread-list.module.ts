import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ThreadListComponent } from "./thread-list.component";
import { ThreadModule } from "../thread-list";

@NgModule({
  declarations: [
    ThreadListComponent,
    ThreadModule
  ],
  imports: [
    CommonModule,
    ThreadModule
  ],
  exports: [ThreadListComponent],
})

export class ThreadListModule { }
