import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  TimerStarted = false;

 Login = false;

 TotalTime: number = 120

  TimeFailure = false;

 Time = () => {
   if(this.TotalTime <= 0){
     this.TimeFailure = true;
     this.TimerStarted = false
     return;
   }
   else {
   this.TotalTime--;


   setTimeout(this.Time, 1000);}
 }

 StartTimer = () =>{
   if(this.TimerStarted){

     return;
   }
   else {
     this.TimerStarted = true;
     this.Time()
   }
 }

  constructor() {

  }
}
