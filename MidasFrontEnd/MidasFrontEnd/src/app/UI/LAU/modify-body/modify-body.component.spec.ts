import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBodyComponent } from './modify-body.component';

describe('ModifyBodyComponent', () => {
  let component: ModifyBodyComponent;
  let fixture: ComponentFixture<ModifyBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
