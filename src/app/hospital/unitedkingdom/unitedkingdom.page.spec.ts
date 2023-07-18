import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitedkingdomPage } from './unitedkingdom.page';

describe('UnitedkingdomPage', () => {
  let component: UnitedkingdomPage;
  let fixture: ComponentFixture<UnitedkingdomPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnitedkingdomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
