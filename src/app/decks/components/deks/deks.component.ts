import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Deck } from '../../models/deck.model';
import Swiper from 'swiper';
import { Confirmation, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-deks',
  templateUrl: './deks.component.html',
  styleUrls: ['./deks.component.scss']
})
export class DeksComponent implements OnInit {

  constructor(
    private confirmationService: ConfirmationService
  ){}

  @Output('delete') delete = new EventEmitter();
  @Input('decks') decks: Deck[];
  responsiveOptions: any[];

  ngOnChanges() {
    const swiper = new Swiper('swiper-container')
  }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  confirm(deck: Deck, event){
    this.confirmationService.confirm({
      target: event.target,
      message: 'Tem certeza que deseja excluir esse deck?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.delete.emit(deck.id)
      },
      key: 'deleteDeck'
    })
  }

}
