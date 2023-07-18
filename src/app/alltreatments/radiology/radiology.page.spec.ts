import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadiologyPage } from './radiology.page';

describe('RadiologyPage', () => {
  let component: RadiologyPage;
  let fixture: ComponentFixture<RadiologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RadiologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
