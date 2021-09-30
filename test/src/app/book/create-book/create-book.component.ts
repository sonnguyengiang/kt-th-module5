import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  bookFrom!: FormGroup;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(){
    this.bookFrom = new FormGroup({
      id: new FormControl(0, Validators.required),
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl(true),
    })
  }

  create(){
    this.http.post('http://localhost:3000/books', this.bookFrom.value).subscribe((data) => {
      alert("tạo thành công");
    })
  }

}
