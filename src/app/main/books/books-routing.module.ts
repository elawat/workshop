import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksSearchComponent } from './pages/books-search/books-search.component';

const routes: Routes = [
  {
    path: 'search',
    component: BooksSearchComponent,
  },
  {
    path: '**',
    redirectTo: 'search',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
