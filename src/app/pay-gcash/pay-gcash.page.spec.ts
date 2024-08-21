import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayGcashPage } from './pay-gcash.page';

describe('PayGcashPage', () => {
  let component: PayGcashPage;
  let fixture: ComponentFixture<PayGcashPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PayGcashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
