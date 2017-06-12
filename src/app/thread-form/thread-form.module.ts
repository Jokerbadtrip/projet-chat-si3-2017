import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ThreadFormComponent } from "./thread-form.component";

@NgModule({
  declarations: [
    ThreadFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ThreadFormComponent]
})
export class ThreadFormModule { }
