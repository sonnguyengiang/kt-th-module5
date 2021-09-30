import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../model/book";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookForm!: FormGroup;
  id!: number;
  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute ) { }

  ngOnInit(){
    this.bookForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl(),
      status: new FormControl(true),
    })
    this.activatedRoute.params.subscribe((data) => this.id = data.id);
    this.getBook();
  }

  getBook(){
    this.http.get<Book>(`http://localhost:3000/books/${this.id}`).subscribe((data)=>{
      this.bookForm.get('id')?.setValue(data.id);
      this.bookForm.get('title')?.setValue(data.title);
      this.bookForm.get('author')?.setValue(data.author);
      this.bookForm.get('description')?.setValue(data.description);
    })
  }

  submitEdit(){
    this.http.put(`http://localhost:3000/books/${this.id}`, this.bookForm.value).subscribe((data)=> {
      alert("đập đi xây lại thành công");
    })
  }
}
