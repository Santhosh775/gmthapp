import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OralPage } from './oral.page';

describe('OralPage', () => {
  let component: OralPage;
  let fixture: ComponentFixture<OralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
