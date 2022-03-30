import { Component, OnInit } from '@angular/core';
import { AdminLoginService} from "../../../admin-login.service";

@Component({
  selector: 'app-error2',
  templateUrl: './error2.component.html',
  styleUrls: ['./error2.component.css']
})
export class Error2Component implements OnInit {
  AdminLoginContainer = this.AdminLogin.Login;

  constructor(private AdminLogin: AdminLoginService) { }

  ngOnInit(): void {
  }
}
