import { Component, OnInit } from '@angular/core';
import {AdminLoginService} from "../../../admin-login.service";

@Component({
  selector: 'app-error1',
  templateUrl: './error1.component.html',
  styleUrls: ['./error1.component.css']
})
export class Error1Component implements OnInit {

  AdminLoginContainer = this.AdminLogin.Login;

  constructor(private AdminLogin: AdminLoginService) { }

  ngOnInit(): void {
  }

}
