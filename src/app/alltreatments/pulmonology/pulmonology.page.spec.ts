import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PulmonologyPage } from './pulmonology.page';

describe('PulmonologyPage', () => {
  let component: PulmonologyPage;
  let fixture: ComponentFixture<PulmonologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PulmonologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
