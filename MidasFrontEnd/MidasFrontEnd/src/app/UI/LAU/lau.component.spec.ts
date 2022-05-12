import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAUComponent } from './lau.component';

describe('LAUComponent', () => {
  let component: LAUComponent;
  let fixture: ComponentFixture<LAUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LAUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LAUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
