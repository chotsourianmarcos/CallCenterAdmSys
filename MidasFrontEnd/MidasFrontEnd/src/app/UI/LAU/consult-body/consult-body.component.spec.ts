import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultBodyComponent } from './consult-body.component';

describe('ConsultBodyComponent', () => {
  let component: ConsultBodyComponent;
  let fixture: ComponentFixture<ConsultBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
