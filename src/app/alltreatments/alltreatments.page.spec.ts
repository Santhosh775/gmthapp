import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlltreatmentsPage } from './alltreatments.page';

describe('AlltreatmentsPage', () => {
  let component: AlltreatmentsPage;
  let fixture: ComponentFixture<AlltreatmentsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlltreatmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
