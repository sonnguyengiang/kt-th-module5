import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookComponent} from "./book.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [
  {
    path: "",
    component: BookComponent
  },
  {
    path: "create",
    component: CreateBookComponent
  },
  {
    path: "edit/:id",
    component: EditBookComponent
  },
  {
    path: "detail/:id",
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
