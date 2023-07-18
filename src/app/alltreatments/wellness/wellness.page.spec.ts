import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WellnessPage } from './wellness.page';

describe('WellnessPage', () => {
  let component: WellnessPage;
  let fixture: ComponentFixture<WellnessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WellnessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
