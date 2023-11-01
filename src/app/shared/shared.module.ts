import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './components/empty/empty.component';
import { AnimationLoader, LottieModule } from 'ngx-lottie';
import { register } from 'swiper/element/bundle';
register();


export function playerFactory() { 
  return import('lottie-web'); 
}

@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory})
  ],
  exports: [
    EmptyComponent
  ],
  providers: [
    AnimationLoader
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
