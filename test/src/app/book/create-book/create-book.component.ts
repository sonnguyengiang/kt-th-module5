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
      id: new FormControl(0, Validators.min(1)),
      title: new FormControl('', Validators.min(1)),
      author: new FormControl('', Validators.min(1)),
      description: new FormControl('', Validators.min(3)),
      status: new FormControl(true),
    })
  }

  create(){
    this.http.post('http://localhost:3000/books', this.bookFrom.value).subscribe((data) => {
      alert("tạo thành công");
    })
  }

}
