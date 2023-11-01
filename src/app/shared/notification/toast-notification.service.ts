import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Notification } from './notification';



@Injectable({
  providedIn: 'root'
})
export class ToastNotificationService extends Notification {

  constructor(private toast: HotToastService) {
    super()
   }

  success(message): void {
    this.toast.success(message);
  }

  error(message): void {
    this.toast.error(message);
  }
}
