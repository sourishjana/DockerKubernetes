import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {
  books:Book[] | undefined

  constructor(private service:BookService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(){
    this.service.getAllBooks().subscribe(resp=>{
      console.log(resp)
      this.books=resp
    },err=>{
      console.log(err)
    })
  }

}
