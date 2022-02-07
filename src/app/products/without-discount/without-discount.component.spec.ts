import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutDiscountComponent } from './without-discount.component';

describe('WithoutDiscountComponent', () => {
  let component: WithoutDiscountComponent;
  let fixture: ComponentFixture<WithoutDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
