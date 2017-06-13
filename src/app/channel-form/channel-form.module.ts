import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ChannelFormComponent } from "./channel-form.component";

@NgModule({
  declarations: [
    ChannelFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ChannelFormComponent]
})
export class ChannelFormModule { }
