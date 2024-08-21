import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserBookmarkPage } from './user-bookmark.page';

describe('UserBookmarkPage', () => {
  let component: UserBookmarkPage;
  let fixture: ComponentFixture<UserBookmarkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookmarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
