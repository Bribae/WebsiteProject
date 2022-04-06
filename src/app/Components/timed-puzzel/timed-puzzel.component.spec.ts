import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedPuzzelComponent } from './timed-puzzel.component';

describe('TimedPuzzelComponent', () => {
  let component: TimedPuzzelComponent;
  let fixture: ComponentFixture<TimedPuzzelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimedPuzzelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimedPuzzelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
