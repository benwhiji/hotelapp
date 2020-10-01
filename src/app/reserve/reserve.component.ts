import { Component, OnInit } from '@angular/core';
import {  ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

 
  @ViewChild('target') private myScrollContainer: ElementRef;

  scrollToElement(el): void{
    this.myScrollContainer.nativeElement.scroll({
      top:this.myScrollContainer.nativeElement.scrollHeight,
      left:0,
      behavior:'smooth'
    });
  }

  rForm: FormGroup;
  post:any;
   name: string ='';
 
  constructor(private fb: FormBuilder)
  {
    this.rForm =fb.group({
      'name':[null, [Validators.required,Validators.minLength(2)]]
    
    });
  }

  addPost(post)
  {
    this.name =post.name;
    
  }

  ngOnInit(): void {
  }

}
