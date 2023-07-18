import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PediatricsPage } from './pediatrics.page';

describe('PediatricsPage', () => {
  let component: PediatricsPage;
  let fixture: ComponentFixture<PediatricsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PediatricsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
