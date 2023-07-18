import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NeurologyPage } from './neurology.page';

describe('NeurologyPage', () => {
  let component: NeurologyPage;
  let fixture: ComponentFixture<NeurologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NeurologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
