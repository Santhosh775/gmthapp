import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HospitalPage } from './hospital.page';

describe('HospitalPage', () => {
  let component: HospitalPage;
  let fixture: ComponentFixture<HospitalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
