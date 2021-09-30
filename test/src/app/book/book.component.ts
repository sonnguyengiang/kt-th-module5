import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this.http.get<Book[]>('http://localhost:3000/books').subscribe((data)=>{
      this.books = data;
    })
  }

  delete(id: any){
    this.http.delete(`http://localhost:3000/books/${id}`).subscribe((data)=>{
      alert("ra đảo thành công");
      this.getBooks();
    })
  }
}
