import { MessageService } from '../../../shared/services';
import { MessagePagerComponent } from './';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    MessagePagerComponent
  ],
  imports: [
  ],
  exports: [MessagePagerComponent],
  providers: [MessageService]
})
export class MessagePagerModule {
 }
