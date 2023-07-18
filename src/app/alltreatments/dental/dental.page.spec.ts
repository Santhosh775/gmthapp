import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DentalPage } from './dental.page';

describe('DentalPage', () => {
  let component: DentalPage;
  let fixture: ComponentFixture<DentalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
