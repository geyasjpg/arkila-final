import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaitacceptPage } from './waitaccept.page';

describe('WaitacceptPage', () => {
  let component: WaitacceptPage;
  let fixture: ComponentFixture<WaitacceptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitacceptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
