import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from "../../../admin-login.service";

@Component({
  selector: 'app-error3',
  templateUrl: './error3.component.html',
  styleUrls: ['./error3.component.css']
})
export class Error3Component implements OnInit {

  AdminLoginContainer = this.AdminLogin.Login;

  constructor(private AdminLogin: AdminLoginService) { }

  ngOnInit(): void {
  }
}
