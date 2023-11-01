import { Injectable } from "@angular/core";
import { DeckApi } from "./api/deck.api";
import { DeckState } from "./state/decks.state";
import { Observable } from "rxjs";
import { Deck } from "./models/deck.model";
import { Card } from "./models/card.model";
import { uuid } from "../shared/helpers/uuid";
import { Notification } from '../shared/notification/notification'

@Injectable()
export class DeckFacade {

    constructor(
        private api: DeckApi,
        private state: DeckState,
        private notification: Notification
    ){}

    decks$: Observable<Deck[]> = this.state.decks$;
    cards$: Observable<Card[]> = this.state.cards$;
    cardsFiltered$: Observable<Card[]> = this.state.cardsFiltered$;
    types$: Observable<string[]> = this.state.types$;

    getCards(){
        for(let i = 1; i < 57 ; i++){
            this.loadMoreCards(i)
        }
    }

    getCardsByDeckId(id: string){
        const [deck] = this.state.decks.filter(deck => deck.id == id);
        this.state.cards = [...deck.cards]
        this.state.cardsFiltered = [...deck.cards]

        return deck
    }

    getFiltersType() {
        this.api.getFilterType().subscribe(res => {
            this.state.types = res
        })
    }

    loadMoreCards(page) {
        this.api.loadMoreCards(page).subscribe(cards => {
            if(this.state.cards.length == 0) this.state.cards = cards
            this.state.cards = [...this.state.cards, ...cards]
            this.state.cardsFiltered = this.state.cards
        })
        
    }

    saveDeck(deck: Deck) {
        this.state.decks = [...this.state.decks, deck];
        this.resetState()
        this.notification.success('Deck salvo com sucesso!')
    }

    filterByOptions(filterOptions: any) {
        this.state.cardsFiltered = this.state.cards.filter(card => {
            const {type, subtype, supertype} = filterOptions
            return (
                (type && Array.isArray(card.types) ? card.types.includes(type): true) &&
                (subtype && Array.isArray(card.subtypes) ? card.subtypes.includes(subtype): true) &&
                (supertype ? card.supertype.includes(supertype): true)
            )  
        })
    }

    resetState(){
        this.state.cards = [];
        this.state.cardsFiltered = [];
    }

    updateDeck(deck: Deck){
        const index = this.state.decks.findIndex(d => d.id == deck.id);
        this.state.decks[index] = deck;
        this.state.decks = [...this.state.decks]
        this.resetState()
        this.notification.success('Deck atualizado com sucesso!')
    }

    removeDeck(deck: Deck){
        this.state.decks = this.state.decks.filter(d => d.id != deck.id);
        this.resetState()
        this.notification.success('Deck removido com sucesso!')
    }

    deleteDeck(id) {
        this.state.decks = this.state.decks.filter(d => d.id != id);
        this.notification.success('Deck removido com sucesso!')
    }
}
