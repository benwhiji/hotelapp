import { Component, OnInit } from '@angular/core';
import {  ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  addCreditCard = false;
  formSubmitted = false;

  @ViewChild('target') private myScrollContainer: ElementRef;

  scrollToElement(el): void{
    this.myScrollContainer.nativeElement.scroll({
      top:this.myScrollContainer.nativeElement.scrollHeight,
      left:0,
      behavior:'smooth'
    });
  }
  


  myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }
  constructor() { }

  ngOnInit() {

  }

  addCreditCardBtn() {
    this.addCreditCard = !this.addCreditCard;
  }

  // submitBtn() {
  //   this.formSubmitted = true;
  // }





  

}
