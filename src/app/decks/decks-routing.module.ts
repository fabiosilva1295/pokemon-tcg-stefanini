import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckListComponent } from './containers/deck-list/deck-list.component';
import { DeckCreateComponent } from './containers/deck-create/deck-create.component';

const routes: Routes = [
    { 
      path: '',
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: DeckListComponent
        },
        {
          path: 'create',
          component: DeckCreateComponent
        },
        {
          path: 'edit/:id',
          component: DeckCreateComponent
        },
        {
          path: ':view/:id',
          component: DeckCreateComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecksRoutingModule { }
