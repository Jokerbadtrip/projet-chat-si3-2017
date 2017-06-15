import {NgModule} from "@angular/core";
import {FormComponent} from "./forms.component";
import {CommonModule} from "@angular/common";
@NgModule({

  declarations: [
    FormComponent,
  ],
  imports: [
    CommonModule
  ],

  exports: [FormComponent]

})
export class FormModule {
}
