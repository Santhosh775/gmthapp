import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiochemistryPage } from './biochemistry.page';

describe('BiochemistryPage', () => {
  let component: BiochemistryPage;
  let fixture: ComponentFixture<BiochemistryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BiochemistryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
