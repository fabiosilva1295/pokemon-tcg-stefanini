import { Component, Input } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent {

  @Input('text') text: string;

  options: AnimationOptions = {
    path: 'assets/lottie/empty.json'
  }

}
