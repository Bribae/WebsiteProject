import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorPuzzleComponent } from './cursor-puzzle.component';

describe('CursorPuzzleComponent', () => {
  let component: CursorPuzzleComponent;
  let fixture: ComponentFixture<CursorPuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursorPuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursorPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
