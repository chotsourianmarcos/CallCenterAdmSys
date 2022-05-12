import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpagesNavBarComponent } from './main-nav-bar.component';

describe('SubpagesNavBarComponent', () => {
  let component: SubpagesNavBarComponent;
  let fixture: ComponentFixture<SubpagesNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubpagesNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpagesNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
