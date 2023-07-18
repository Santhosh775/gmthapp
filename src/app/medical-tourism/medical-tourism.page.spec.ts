import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MedicalTourismPage } from './medical-tourism.page';

describe('MedicalTourismPage', () => {
  let component: MedicalTourismPage
;
  let fixture: ComponentFixture<MedicalTourismPage
>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MedicalTourismPage
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
