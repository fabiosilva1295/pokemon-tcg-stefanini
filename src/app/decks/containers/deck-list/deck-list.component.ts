import { Component } from '@angular/core';
import { DeckFacade } from '../../decks.facade';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss']
})
export class DeckListComponent {

  constructor(
    public facade: DeckFacade
  ){}

  delete(id: string) {
    this.facade.deleteDeck(id)
  }
}
