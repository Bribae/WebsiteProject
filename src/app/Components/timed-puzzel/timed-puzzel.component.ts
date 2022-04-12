import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, HostListener, AfterViewChecked} from '@angular/core';
import {AdminLoginService} from "../../admin-login.service";
import {delay} from "rxjs";

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
  Puzzle2 = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (!this.Square1Clicked) {
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

  MouseTracker(t: any) {
    if (!this.Square1Clicked) {
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
      if (Distance < 100000000000000000000000000000000000000000) {
        this.DistanceOpacity = 'full'
      }
    }
  };


  Failure = false;

  ngAfterViewChecked(): void {
    if (!this.Square1Clicked) {
      this.BlackSquare1X = this.BlackSquare1.nativeElement?.getBoundingClientRect().left + 20;
      this.BlackSquare1Y = this.BlackSquare1.nativeElement?.getBoundingClientRect().top + 20;
    }
  }

  BlackSquare1Func() {
    this.SquareClicks++;
    if (this.SquareClicks == 1) {
      this.SquareClass = 'Black2'
      return;
    }
    if (this.SquareClicks == 2) {
      this.SquareClass = 'Black3'
      return;
    }
    this.Square1Clicked = true;
    this.Puzzle2 = true;
  }

  //Puzzel 2
  LastClicked = '';
  ColorWanted = '';
  Red = false;
  Blue = false;
  Green = false;
  Yellow = false;
  ColorFail = false;
  Round = 1
  ColorWin1 = false;
  ColorWin2 = false;

  Start() {
    if ( this.Round == 1) {
      this.ColorFail = false;
      this.ColorWanted = 'Yellow'
      this.Yellow = true;
      setTimeout(() => {
        this.Yellow = false;
        this.Blue = true;
        setTimeout(() => {
          this.Blue = false;
          this.Green = true;
          setTimeout(() => {
            this.Green = false;
            this.Red = true
            setTimeout(() => {
              this.Red = false;
            }, 600)
          }, 600)
        }, 600)
      }, 600)
    }
    if (this.Round == 2) {
      this.ColorWanted = 'Red'
      this.Red = true;
      setTimeout(()=>{
        this.Red = false;
        this.Blue = true;
        setTimeout(()=>{
          this.Blue = false;
          this. Yellow = true;
          setTimeout(()=>{
            this.Yellow = false;
            this.Green = true;
            setTimeout(()=>{
              this.Green = false;
            }, 300)
          }, 300)
        }, 300)
      }, 300)
    }
  }

  RedFunc() {
    if (this.Round == 2){
      if(this.ColorWanted === 'Red') {
        this.ColorWanted = 'Blue'
      }
      else {
        this.ColorFail = true;
        this.ColorWanted = ''
      }
    }
    if(this.Round == 1) {
      if (this.ColorWanted === "Red") {
        this.ColorWanted = ''
        this.Round++;
        this.ColorWin1 = true;

      } else {
        this.ColorFail = true;
        this.ColorWanted = ''
      }
    }
  }

  YellowFunc() {
    if(this.Round == 2){
      if(this.ColorWanted === 'Yellow'){
        this.ColorWanted = 'Green'
      }
      else {
        this.ColorFail = true;
        this.ColorWanted = ''
      }
    }
    if (this.Round == 1) {
      if (this.ColorWanted === "Yellow") {
        this.ColorWanted = 'Blue'
      } else {
        this.ColorFail = true;
        this.ColorWanted = ''
      }
    }
  }

  BlueFunc() {
    if (this.Round == 2){
      if ( this.ColorWanted === 'Blue'){
        this.ColorWanted = 'Yellow'
      }
      else {
        this.ColorFail = true;
        this.ColorWanted = ''
      }
    }
    if (this.Round == 1) {
      if (this.ColorWanted === "Blue") {
        this.ColorWanted = 'Green'
      } else {
        this.ColorFail = true;
        this.ColorWanted = ''
      }
    }
  }

  GreenFunc() {
    if (this.Round == 2){
      if(this.ColorWanted === 'Green'){
        this.ColorWanted = '';
        this.Puzzle2 = false;
      }
      else {
        this.ColorFail = true;
        this.ColorWanted = ''
      }
    }
    if (this.Round == 1) {
      if (this.ColorWanted === 'Green') {
        this.ColorWanted = 'Red'
      } else {
        this.ColorFail = true;
        this.ColorWanted = ''
      }
    }
  }
}
