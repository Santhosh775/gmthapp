import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UrologyPage } from './urology.page';

describe('UrologyPage', () => {
  let component: UrologyPage;
  let fixture: ComponentFixture<UrologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UrologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
