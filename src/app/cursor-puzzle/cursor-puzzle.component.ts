import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursor-puzzle',
  templateUrl: './cursor-puzzle.component.html',
  styleUrls: ['./cursor-puzzle.component.css']
})
export class CursorPuzzleComponent implements OnInit {

  OnMove($event: any){
    console.log('bitches')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
