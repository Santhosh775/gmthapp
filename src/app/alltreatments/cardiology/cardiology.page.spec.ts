import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardiologyPage } from './cardiology.page';

describe('CardiologyPage', () => {
  let component: CardiologyPage;
  let fixture: ComponentFixture<CardiologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardiologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
