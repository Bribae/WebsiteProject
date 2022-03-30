import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-symbol-puzzle',
  templateUrl: './symbol-puzzle.component.html',
  styleUrls: ['./symbol-puzzle.component.css']
})
export class SymbolPuzzleComponent implements OnInit {

  TruthJar = false;

  check(){
    if(this.TruthJar1){
    }
    else {
      return;
    }
    if(this.TruthJar2){

    }
    else {
      return;
    }
    if(this.TruthJar3){

    }
    else {
      return;
    }
    this.TruthJar = true;
  }

  constructor() { }

  number1 = new FormControl('', [Validators.required]);
  number2 = new FormControl('', [Validators.required]);
  number3 = new FormControl('', [Validators.required]);

  firstnumber = '5';
  TruthJar1 = false;
  secondnumber = '9';
  TruthJar2 = false;
  thirdnumber = '3';
  TruthJar3 = false;

  ngOnInit(): void {
    this.number1.valueChanges.subscribe(t => {
        if (t === this.firstnumber) {
          this.TruthJar1 = true
        } else {
          this.TruthJar1 = false
        }
      }
    )
  this.number2.valueChanges.subscribe(t => {
  if (t === this.secondnumber) {
  this.TruthJar2 = true
} else {
  this.TruthJar2 = false
}
}
)
    this.number3.valueChanges.subscribe(t => {
        if (t === this.thirdnumber) {
          this.TruthJar3 = true
        } else {
          this.TruthJar3 = false
        }
      }
    )
  }


}
