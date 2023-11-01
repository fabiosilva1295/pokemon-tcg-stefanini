import { Component, OnInit } from '@angular/core';
import { DeckFacade } from '../../decks.facade';
import { Deck } from '../../models/deck.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.scss']
})
export class DeckCreateComponent implements OnInit {

  constructor(
    public facade: DeckFacade,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ){}

  editMode: boolean = false;
  viewMode: boolean = false;

    form: FormGroup = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      cards: this.formBuilder.array([])
    })

    get _cards(): FormArray {
      return this.form.get('cards') as FormArray;
    }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id'); 
    const view = this.activatedRoute.snapshot.paramMap.get('view');
    console.log(view, id)
    id && !view ? this.setInitialForm(id) : false;
    id && view ? this.setViewForm() : false;
    !id && !view ? this.facade.getCards() : false;
    this.facade.getFiltersType()
  }

  loadMoreCards(page: number){
    this.facade.loadMoreCards(page);
  }

  saveDeck(deck: Deck) {
    this.facade.saveDeck(deck);
    this.router.navigate(['/deck'])
  }

  applyFilter(filterOtions){
    this.facade.filterByOptions(filterOtions)
  }

  cancel(){
    this.router.navigate(['/deck']);
    this.facade.resetState();
  }

  setInitialForm(id: string){
    const deck = this.facade.getCardsByDeckId(id);
    this.form.patchValue(deck);
    deck.cards.forEach(card => this._cards.push(new FormControl(card)))
    this.facade.getCards();
    this.editMode = true;
  }

  setViewForm(){
    const deck = this.facade.getCardsByDeckId(this.activatedRoute.snapshot.paramMap.get('id'));
    this.form.patchValue(deck);
    deck.cards.forEach(card => this._cards.push(new FormControl(card)));
    this.viewMode = true;
  
  }

  updateDeck(deck: Deck) {
    this.facade.updateDeck(deck);
    this.router.navigate(['/deck'])
  }
}
