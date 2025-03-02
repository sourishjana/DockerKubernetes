import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {path:'',component:AllBooksComponent},
  {path:'add',component:AddBookComponent},
  {path:'book/:id',component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
