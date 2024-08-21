import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoredetailsPage } from './moredetails.page';

describe('MoredetailsPage', () => {
  let component: MoredetailsPage;
  let fixture: ComponentFixture<MoredetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MoredetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
