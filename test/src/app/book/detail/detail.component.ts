import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../model/book";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  bookForm!: FormGroup;
  id!: number;
  book!: Book;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.bookForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl(),
      status: new FormControl(true),
    })
    this.activatedRoute.params.subscribe((data) => this.id = data.id);
    this.getDetailBook();

  }

  getDetailBook() {
    this.http.get<Book>(`http://localhost:3000/books/${this.id}`).subscribe((data) => {
      this.bookForm.get('title')?.setValue(data.title);
      this.bookForm.get('author')?.setValue(data.author);
      this.bookForm.get('description')?.setValue(data.description);
    })
  }
}
