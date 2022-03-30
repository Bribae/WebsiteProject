import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, HostListener, AfterViewChecked} from '@angular/core';


@Component({
  selector: 'app-mouse-puzzle',
  templateUrl: './mouse-puzzle.component.html',
  styleUrls: ['./mouse-puzzle.component.css']
})
export class MousePuzzleComponent implements OnInit, AfterViewInit, AfterViewChecked {

  WhiteSquareY: number = 0;
  WhiteSquareX: number = 0;
  CursorY: number = 0;
  CursorX: number = 0;
  DistanceColor: string = ''



  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.WhiteSquareX = this.WhiteSquare.nativeElement.getBoundingClientRect().left + 20;
    this.WhiteSquareY = this.WhiteSquare.nativeElement.getBoundingClientRect().top + 20;
  }


  @ViewChild('WhiteSquare')

  WhiteSquare!: ElementRef;

MouseTracker(t: any){
  this.CursorX = t.clientX
  this.CursorY = t.clientY
  let XDistance = Math.abs(this.CursorX - this.WhiteSquareX)
  let YDistance = Math.abs(this.CursorY - this.WhiteSquareY)
  let Distance = Math.sqrt(XDistance * XDistance + YDistance * YDistance)
  if (Distance < 30) {
   this.DistanceColor = 'Red'
    return;
  }
  if (Distance < 100) {
    this.DistanceColor = 'DeepOrange'
    return;
  }
  if (Distance < 200) {
    this.DistanceColor = 'Orange'
    return;
  }
  if (Distance < 300) {
    this.DistanceColor = 'LightOrange'
    return;
  }
  if (Distance < 400) {
    this.DistanceColor = 'DarkYellow'
    return;
  }
  if (Distance < 500) {
    this.DistanceColor = 'Yellow'
    return;
  }
  if (Distance < 600) {
    this.DistanceColor = 'YellowGreen'
    return;
  }
  if (Distance < 700) {
    this.DistanceColor = 'Lime'
    return;
  }
  if (Distance < 800) {
    this.DistanceColor = 'Green'
    return;
  }
  if (Distance < 900) {
    this.DistanceColor = 'DarkGreen'
    return;
  }
  if (Distance < 1000) {
    this.DistanceColor = 'Black'
    return;
  }
};


  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }
  ngAfterViewChecked() {
    this.WhiteSquareX = this.WhiteSquare.nativeElement.getBoundingClientRect().left + 20;
    this.WhiteSquareY = this.WhiteSquare.nativeElement.getBoundingClientRect().top + 20;
  }

}
