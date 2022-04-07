import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, HostListener, AfterViewChecked} from '@angular/core';
import {AdminLoginService} from "../../admin-login.service";

@Component({
  selector: 'app-timed-puzzel',
  templateUrl: './timed-puzzel.component.html',
  styleUrls: ['./timed-puzzel.component.css']
})
export class TimedPuzzelComponent implements OnInit, AfterViewChecked {

  BlackSquare1Y: number = 0;
  BlackSquare1X: number = 0;
  SquareClass = 'Black1';
  CursorY: number = 0;
  CursorX: number = 0;
  DistanceOpacity: string = ''
  Square1Clicked = false;
  SquareClicks = 0;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if(!this.Square1Clicked) {
      this.BlackSquare1X = this.BlackSquare1.nativeElement?.getBoundingClientRect().left + 20;
      this.BlackSquare1Y = this.BlackSquare1.nativeElement?.getBoundingClientRect().top + 20;
    }
  }


    @ViewChild('BlackSquare1')

    BlackSquare1!: ElementRef;


  constructor(public Login: AdminLoginService) {
  }

  ngOnInit(): void {
    this.Login.StartTimer()

  }

  MouseTracker(t: any){
    if(!this.Square1Clicked){
    this.CursorX = t.clientX
    this.CursorY = t.clientY
    let XDistance = Math.abs(this.CursorX - this.BlackSquare1X)
    let YDistance = Math.abs(this.CursorY - this.BlackSquare1Y)
    let Distance = Math.sqrt(XDistance * XDistance + YDistance * YDistance)
    if (Distance < 150) {
      this.DistanceOpacity = 'zero'
      return;
    }
    if (Distance < 300) {
      this.DistanceOpacity = 'one'
      return;
    }
    if (Distance < 450) {
      this.DistanceOpacity = 'two'
      return;
    }
    if (Distance < 600) {
      this.DistanceOpacity = 'three'
      return;
    }
    if (Distance < 750) {
      this.DistanceOpacity = 'four'
      return;
    }
    if (Distance < 900) {
      this.DistanceOpacity = 'five'
      return;
    }
    if (Distance < 1050) {
      this.DistanceOpacity = 'six'
      return;
    }
    if (Distance < 1200) {
      this.DistanceOpacity = 'seven'
      return;
    }
    if (Distance < 1350) {
      this.DistanceOpacity = 'eight'
      return;
    }
    if (Distance < 1500) {
      this.DistanceOpacity = 'nine'
      return;
    }
    if (Distance < 100000000000000000000000000000000000000000){
      this.DistanceOpacity = 'full'
    } }
  };


  Failure = false;

  ngAfterViewChecked(): void {
    if(!this.Square1Clicked) {
      this.BlackSquare1X = this.BlackSquare1.nativeElement?.getBoundingClientRect().left + 20;
      this.BlackSquare1Y = this.BlackSquare1.nativeElement?.getBoundingClientRect().top + 20;
    }
  }

  BlackSquare1Func(){
  this.SquareClicks++;
  console.log(this.SquareClicks)
  if(this.SquareClicks == 1){
    console.log('sad')
    this.SquareClass = 'Black2'
    return;
  }
  if(this.SquareClicks == 2){
    console.log('penis')
    this.SquareClass = 'Black3'
    return;
  }
 this.Square1Clicked = true;
  }

}
