import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  //private baseUrl='https://localhost:7160/api/books/'
  private baseUrl='http://localhost:80/api/books/'

  constructor(private http:HttpClient) { }

  getAllBooks(){
    return this.http.get<Book[]>(this.baseUrl)
  }

  addBook(book:Book){
    return this.http.post(this.baseUrl,book)
  }

  getBookById(id:number){
    return this.http.get<Book>(this.baseUrl+id)
  }

  updateBook(id:number,bookData:Book){
    return this.http.put(this.baseUrl+id,bookData)
  }

  deleteBook(id:number){
    return this.http.delete(this.baseUrl+id)
  }
}
