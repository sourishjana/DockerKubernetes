import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { forbiddenSpecialCharValidator } from '../restrict-special.directive';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  val:boolean=false

  constructor(private service:BookService,private fb:FormBuilder,private routeLink:Router) { }

  ngOnInit(): void {
  }

  book=this.fb.group({ // Validators.pattern("/[/-]/g")
    title:['',[Validators.required,forbiddenSpecialCharValidator(/[/-]/)]],
    description:['']
  })

  get title(){return this.book.get('title')}

  onSubmit(data:any){
    console.log(data.value)
    this.service.addBook(data.value).subscribe(resp=>{
      console.log(resp)
      this.routeLink.navigateByUrl('/')
    },err=>{
      console.log(err)
    })
  }

  func(){
    this.val=true
    this.book.patchValue({
      title:this.title?.value.toUpperCase()
    })
  }

}
