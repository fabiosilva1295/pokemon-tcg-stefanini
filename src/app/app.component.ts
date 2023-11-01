import { Component } from '@angular/core';
import Swiper  from 'swiper';

const swiper = new Swiper('.swiper-container', { 
  navigation: { 
  nextEl: '.swiper-button-next', 
  prevEl: '.swiper-button-prev'
  }
  });

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
