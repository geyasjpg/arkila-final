import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploaddocsPage } from './uploaddocs.page';

describe('UploaddocsPage', () => {
  let component: UploaddocsPage;
  let fixture: ComponentFixture<UploaddocsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaddocsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
