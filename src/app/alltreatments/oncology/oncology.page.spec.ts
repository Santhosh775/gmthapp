import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OncologyPage } from './oncology.page';

describe('OncologyPage', () => {
  let component: OncologyPage;
  let fixture: ComponentFixture<OncologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OncologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
