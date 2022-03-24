import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

password = new FormControl('',[Validators.required])

 PasswordToMatch = '2112Lover69'

TruthJar = false

  constructor() { }

  ngOnInit(): void {
  this.password.valueChanges.subscribe( t =>{
    if(t === this.PasswordToMatch){
      this.TruthJar = true
    }
    else {
      this.TruthJar = false
    }
    }
  )
  }


}
