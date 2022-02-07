import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithDiscountComponent } from './with-discount.component';

describe('WithDiscountComponent', () => {
  let component: WithDiscountComponent;
  let fixture: ComponentFixture<WithDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
