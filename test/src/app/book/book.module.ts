import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {BookComponent} from "./book.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {ReactiveFormsModule} from "@angular/forms";
import { EditBookComponent } from './edit-book/edit-book.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    BookComponent,
    CreateBookComponent,
    EditBookComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }
