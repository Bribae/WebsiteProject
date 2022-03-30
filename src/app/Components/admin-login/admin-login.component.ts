import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AdminLoginService} from "../../admin-login.service";


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  password = new FormControl('', [Validators.required])

  PasswordToMatch = '2112Lover69';

  TruthJar = false;

  LoginContainer = this.AdminLogin.Login;

  constructor(private AdminLogin: AdminLoginService) {

  }

  Login() {
    this.AdminLogin.Login = true
  }

  ngOnInit(): void {
    this.password.valueChanges.subscribe(t => {
        this.TruthJar = t === this.PasswordToMatch;
      }
    )
  }


}
