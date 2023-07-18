import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NephrologyPage } from './nephrology.page';

describe('NephrologyPage', () => {
  let component: NephrologyPage;
  let fixture: ComponentFixture<NephrologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NephrologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
