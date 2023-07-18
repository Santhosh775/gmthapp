import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpthalmologyPage } from './opthalmology.page';

describe('OpthalmologyPage', () => {
  let component: OpthalmologyPage;
  let fixture: ComponentFixture<OpthalmologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OpthalmologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
