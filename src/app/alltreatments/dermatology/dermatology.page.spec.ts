import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DermatologyPage } from './dermatology.page';

describe('DermatologyPage', () => {
  let component: DermatologyPage;
  let fixture: ComponentFixture<DermatologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DermatologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
