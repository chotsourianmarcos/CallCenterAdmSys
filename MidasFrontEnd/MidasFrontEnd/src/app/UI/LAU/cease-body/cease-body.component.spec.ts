import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeaseBodyComponent } from './cease-body.component';

describe('CeaseBodyComponent', () => {
  let component: CeaseBodyComponent;
  let fixture: ComponentFixture<CeaseBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeaseBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeaseBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
