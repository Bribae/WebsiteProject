import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MousePuzzleComponent } from './mouse-puzzle.component';

describe('MousePuzzleComponent', () => {
  let component: MousePuzzleComponent;
  let fixture: ComponentFixture<MousePuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MousePuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MousePuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
