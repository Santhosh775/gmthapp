import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoboticsPage } from './robotics.page';

describe('RoboticsPage', () => {
  let component: RoboticsPage;
  let fixture: ComponentFixture<RoboticsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RoboticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
