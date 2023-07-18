import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EndocrinologyPage } from './endocrinology.page';

describe('EndocrinologyPage', () => {
  let component: EndocrinologyPage;
  let fixture: ComponentFixture<EndocrinologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EndocrinologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
