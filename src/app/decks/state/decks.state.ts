import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Deck } from '../models/deck.model';
import { Card } from '../models/card.model';
import { uuid } from 'src/app/shared/helpers/uuid';


@Injectable({providedIn: 'root'})
export class DeckState  {

    private readonly _decks = new BehaviorSubject<Deck[]>([]);
    private readonly _cards = new BehaviorSubject<Card[]>([]);
    private readonly _cardsFiltered = new BehaviorSubject<Card[]>([]);
    private readonly _types = new BehaviorSubject<string[]>([]);

    public get decks$(): Observable<Deck[]> {
        return this._decks.asObservable();
    }

    public get types$(): Observable<string[]> { 
        return this._types.asObservable();
    }

    public get cards$(): Observable<Card[]> {
        return this._cards.asObservable();
    }

    public get cardsFiltered$(): Observable<Card[]> {
        return this._cardsFiltered.asObservable();
    }

    get cardsFiltered(): Card[] {
        return this._cardsFiltered.getValue();
    }

    get cards(): Card[] {
        return this._cards.getValue();
    }

    get types(): string[] {
        return this._types.getValue();
    }

    get decks(): Deck[] {
        return this._decks.getValue();
    }

    set types(val: string[]) {
        this._types.next(val);
    }

    set cardsFiltered(val: Card[]) {
        this._cardsFiltered.next(val);
    }

    set cards(val: Card[]) {
        this._cards.next(val);
    }

    set decks(val: Deck[]) {
        this._decks.next(val);
    }

    

    public addDeck(deck: Deck): Deck {
        const currentDeck = this.decks;
        this.decks = [...currentDeck, deck];
        return deck;
    }


}
