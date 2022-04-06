import { Component } from '@angular/core';
import {AdminLoginService} from "./admin-login.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebsiteProject';

  constructor(public login: AdminLoginService) {
  }


}

