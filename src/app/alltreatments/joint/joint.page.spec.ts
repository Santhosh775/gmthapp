import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JointPage } from './joint.page';

describe('JointPage', () => {
  let component: JointPage;
  let fixture: ComponentFixture<JointPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
