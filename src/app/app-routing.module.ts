import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'deck', pathMatch: 'full'},
  { path: 'deck', loadChildren: () => import('./decks/decks.module').then(m => m.DecksModule) }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }