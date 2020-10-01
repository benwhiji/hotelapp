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
