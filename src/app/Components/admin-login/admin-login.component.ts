import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

password = new FormControl('',[Validators.required])

  check() {
  if(7){

  }
  };

  constructor() { }

  ngOnInit(): void {
  }


}
