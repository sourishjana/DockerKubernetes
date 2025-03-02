import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  id:number=0
  book:Book={id:0,title:'',description:''}

  constructor(private route: ActivatedRoute,private service:BookService,private fb:FormBuilder,private routeLink:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id=params['id']
      this.service.getBookById(this.id).subscribe(resp=>{
        this.book=resp
        this.updateValues()
      },err=>{
        console.log(err)
      })
    });
  }

  updateValues() {
    this.bookEdit.setValue({
      title:    this.book.title,
      description: this.book.description 
    });
  }

  bookEdit=this.fb.group({
    title:[this.book.title,Validators.required],
    description:[this.book.description]
  })

  get title(){return this.bookEdit.get('title')}

  onSubmit(data:any){
    console.log(data.value)
    this.service.updateBook(this.book.id,data.value).subscribe(resp=>{
      console.log(resp)
      this.routeLink.navigateByUrl('/')
    },err=>{
      console.log(err)
    })
  }

  onDelete(id:number){
    this.service.deleteBook(id).subscribe(resp=>{
      console.log(resp)
      this.routeLink.navigateByUrl('/')
    },err=>{
      console.log(err)
    })
  }

}
