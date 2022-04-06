import {Component, OnInit} from '@angular/core';
import {AdminLoginService} from "../../admin-login.service";

@Component({
  selector: 'app-timed-puzzel',
  templateUrl: './timed-puzzel.component.html',
  styleUrls: ['./timed-puzzel.component.css']
})
export class TimedPuzzelComponent implements OnInit {


  constructor(public Login: AdminLoginService) {
  }

  ngOnInit(): void {
    this.Login.StartTimer()


  }




  Failure = false;

}
