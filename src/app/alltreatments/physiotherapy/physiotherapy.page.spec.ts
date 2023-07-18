import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhysiotherapyPage } from './physiotherapy.page';

describe('PhysiotherapyPage', () => {
  let component: PhysiotherapyPage;
  let fixture: ComponentFixture<PhysiotherapyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PhysiotherapyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
