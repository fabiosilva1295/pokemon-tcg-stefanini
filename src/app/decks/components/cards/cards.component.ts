import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Card } from '../../models/card.model';
import { DeckFacade } from '../../decks.facade';
import Swiper from 'swiper';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Deck } from '../../models/deck.model';
import { uuid } from 'src/app/shared/helpers/uuid';
import { Notification } from 'src/app/shared/notification/notification';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private notification: Notification,
    private confirmationService: ConfirmationService
  ) { }

  @ViewChild('dv') dataView


  @Output('loadMoreCards') loadMoreCards = new EventEmitter();
  @Output('save') save = new EventEmitter();
  @Output('update') update = new EventEmitter();
  @Output('filter') filter = new EventEmitter();
  @Output('cancel') cancel = new EventEmitter();
  @Input('cards') cards: Card[];
  @Input('options') options: any[];
  @Input('editMode') edit: boolean;
  @Input('viewMode') view: boolean;
  @Input('form') form: FormGroup = this.formBuilder.group({
    id: [''],
    title: ['', Validators.required],
    cards: this.formBuilder.array([])
  });



  totalRecords:number = 10;

  filterOptions = {
    type: '',
    subtype: '',
    supertype: ''
  }

  layout: string = 'list';
  page: number = 1;
  responsiveOptions: any[];
  typeOptions: string[] = ['Type', 'Subtype', 'SuperType'];

  get _cards(): FormArray {
    return this.form.get('cards') as FormArray;
  }


  ngOnInit(): void {

    if(this.view && this.form.value) {
      this.cards = this.form.value.cards
    }

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
      },
      {
        breakpoint: '400px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }


  getPokemonTypeColor(type: string) {
    const colours = {
      normal: '#A8A77A',
      fire: '#EE8130',
      water: '#6390F0',
      electric: '#F7D02C',
      grass: '#7AC74C',
      ice: '#96D9D6',
      fighting: '#C22E28',
      poison: '#A33EA1',
      ground: '#E2BF65',
      flying: '#A98FF3',
      psychic: '#F95587',
      bug: '#A6B91A',
      rock: '#B6A136',
      ghost: '#735797',
      dragon: '#6F35FC',
      dark: '#705746',
      steel: '#B7B7CE',
      fairy: '#D685AD',
    };

    switch (type) {
      case 'Fire':
        return colours.fire;
      case 'Water':
        return colours.water;
      case 'Grass':
        return colours.grass;
      case 'Fighting':
        return colours.fighting;
      case 'Psychic':
        return colours.psychic;
      case 'Fairy':
        return colours.fairy;
      case 'Dragon':
        return colours.dragon;
      case 'Dark':
        return colours.dark;
      case 'Steel':
        return colours.steel;
      case 'Ghost':
        return colours.ghost;
      case 'Rock':
        return colours.rock;
      case 'Ice':
        return colours.ice;
      case 'Electric':
        return colours.electric;
      case 'Bug':
        return colours.bug;
      case 'Poison':
        return colours.poison;

      default:
        return colours.normal;
    }
  }

  addCard(card: Card) {
    const tempCard = {
      ...card,
      uuid: uuid()
    }

    if (!this.verifyLimitPeerCardOfDeck(tempCard)) {
      this.notification.error('Só podem ter 4 cartas no mesmo nome no deck');
    } else {
      if (this._cards.value.length == 60) {
        this.validateMinimusAndMaximusCardInDeck()
      } else {
        this._cards.push(new FormControl(tempCard));
        const mySwiper = new Swiper('swiper-container');
      }

    }


  }

  removeCard(card: Card,) {
    const index = this._cards.value.findIndex(x => x.name == card.name)
    if (index >= 0) this._cards.removeAt(index)
    const mySwiper = new Swiper('swiper-container');
  }

  getQuantityOfCardInDeck(card: Card) {
    const cards = this._cards.value;
    let quantity: number = 0;

    cards.forEach(element => {
      if (element.name == card.name) quantity++
    });

    return quantity
  }



  verifyLimitPeerCardOfDeck(card: Card) {
    const cards = this._cards.value;
    let quantity: number = 0;

    cards.forEach(element => {
      if (element.name == card.name) quantity++
    });

    if (quantity > 4) return false

    return true

  }

  validateMinimusAndMaximusCardInDeck(option?) {
    if (option) {
      if (this._cards.value.length < 24) {
        this.notification.error('Deve ter pelo menos 24 cartas no deck');
        return false
      } else if (!this.form.controls['title'].valid) {
        this.notification.error('O deck deve conter um nome');
        return false
      } else if (this._cards.value.length > 60) {
        this.notification.error('Deve ter no máximo 60 cartas no deck');
        return false
      } else {
        return true
      }
    } else {
      if (this._cards.value.length < 24) {
        this.notification.error('Deve ter pelo menos 24 cartas no deck');
        return false
      } else if (!this.form.controls['title'].valid) {
        this.notification.error('O deck deve conter um nome');
        return false
      } else if (this._cards.value.length == 60) {
        this.notification.error('Deve ter no máximo 60 cartas no deck');
        return false
      } else {
        return true
      }
    }

  }

  saveDeck() {
    if (this.validateMinimusAndMaximusCardInDeck()) {
      const deck = { ...this.form.value, id: uuid() }
      this.save.emit(deck)
    }
  }

  applyFilter() {
    this.filter.emit(this.filterOptions);
    this.dataView.first = 1;

  }

  confirm(event: any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Tem certeza que deseja descartar esse deck?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.cancel.emit(true)
      }
    })
  }

  updateDeck() {
    if (this.validateMinimusAndMaximusCardInDeck('save')) this.update.emit(this.form.value)
  }
}


