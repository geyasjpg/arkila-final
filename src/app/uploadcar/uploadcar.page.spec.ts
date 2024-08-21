import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadcarPage } from './uploadcar.page';

describe('UploadcarPage', () => {
  let component: UploadcarPage;
  let fixture: ComponentFixture<UploadcarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadcarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
