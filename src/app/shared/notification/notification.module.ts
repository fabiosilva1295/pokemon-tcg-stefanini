import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotToastModule, HotToastService,  } from '@ngneat/hot-toast';
import { Notification } from './notification';







@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HotToastModule.forRoot()
  ],
  providers: [
    {
      provide: Notification,
      useClass: HotToastService
    }
  ]
})
export class NotificationModule { }
