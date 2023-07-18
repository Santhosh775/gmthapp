import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrazilPage } from './brazil.page';

describe('BrazilPage', () => {
  let component: BrazilPage;
  let fixture: ComponentFixture<BrazilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrazilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
