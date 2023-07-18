import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransplantPage } from './transplant.page';

describe('TransplantPage', () => {
  let component: TransplantPage;
  let fixture: ComponentFixture<TransplantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TransplantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
