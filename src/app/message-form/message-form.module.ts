import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MessageFormComponent } from "./message-form.component";
import { MessageService } from "../../shared/services";
import { MessageModule } from '../messages';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    MessageModule
  ],
  exports: [MessageFormComponent],
  providers: [MessageService]
})
export class MessageFormModule { }
