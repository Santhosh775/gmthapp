import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThailandPage } from './thailand.page';

describe('ThailandPage', () => {
  let component: ThailandPage;
  let fixture: ComponentFixture<ThailandPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ThailandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
