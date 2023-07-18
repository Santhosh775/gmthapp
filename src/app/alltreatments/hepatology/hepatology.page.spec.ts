import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HepatologyPage } from './hepatology.page';

describe('HepatologyPage', () => {
  let component: HepatologyPage;
  let fixture: ComponentFixture<HepatologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HepatologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
