import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HungaryPage } from './hungary.page';

describe('HungaryPage', () => {
  let component: HungaryPage;
  let fixture: ComponentFixture<HungaryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HungaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
