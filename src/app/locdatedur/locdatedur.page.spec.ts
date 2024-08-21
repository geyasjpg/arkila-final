import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocdatedurPage } from './locdatedur.page';

describe('LocdatedurPage', () => {
  let component: LocdatedurPage;
  let fixture: ComponentFixture<LocdatedurPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LocdatedurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
