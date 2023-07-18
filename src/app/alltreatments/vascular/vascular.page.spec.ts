import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VascularPage } from './vascular.page';

describe('VascularPage', () => {
  let component: VascularPage;
  let fixture: ComponentFixture<VascularPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VascularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
