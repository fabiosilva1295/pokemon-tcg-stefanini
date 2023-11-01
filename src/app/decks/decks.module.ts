import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecksRoutingModule } from './decks-routing.module';
import { DeckListComponent } from './containers/deck-list/deck-list.component';
import { DeckCreateComponent } from './containers/deck-create/deck-create.component';
import { DeksComponent } from './components/deks/deks.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { DeckFacade } from './decks.facade';
import { TooltipModule } from  'primeng/tooltip'
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DeckApi } from './api/deck.api';
import { VirtualScrollerModule } from 'primeng/virtualscroller'
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DataViewModule } from 'primeng/dataview';
import { register } from 'swiper/element/bundle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';
import {SkeletonModule } from 'primeng/skeleton';
register();



@NgModule({
  declarations: [
    DeckListComponent,
    DeckCreateComponent,
    DeksComponent,
    CardsComponent,
    
  ],
  imports: [
    CommonModule,
    DecksRoutingModule,
    CarouselModule,
    ButtonModule,
    TooltipModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    VirtualScrollerModule,
    SharedModule,
    InputTextModule,
    DropdownModule,
    DataViewModule,
    ReactiveFormsModule,
    FormsModule,
    ConfirmPopupModule,
    SkeletonModule
  ],
  providers: [
    DeckFacade,
    HttpClient,
    DeckApi,
    ConfirmationService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DecksModule { }
