import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeamatologyPage } from './heamatology.page';

describe('HeamatologyPage', () => {
  let component: HeamatologyPage;
  let fixture: ComponentFixture<HeamatologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HeamatologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
