import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private env = (window as any).__env;

  //private baseUrl = 'http://localhost:70/api/books/' // In case if we donot use nginx 
  private baseUrl= '/api/books/' // when we use nginx

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
