import { Card } from "./card.model";

export interface Deck { 
    id: string;
    title: string;
    cards: Card[]
}