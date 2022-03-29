import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolPuzzleComponent } from './symbol-puzzle.component';

describe('SymbolPuzzleComponent', () => {
  let component: SymbolPuzzleComponent;
  let fixture: ComponentFixture<SymbolPuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymbolPuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
