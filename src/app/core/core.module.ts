import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { NotificationModule } from '../shared/notification/notification.module';
register();



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NotificationModule
    
  ]
})
export class CoreModule { }
