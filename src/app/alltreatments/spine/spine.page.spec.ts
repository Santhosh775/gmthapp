import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinePage } from './spine.page';

describe('SpinePage', () => {
  let component: SpinePage;
  let fixture: ComponentFixture<SpinePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SpinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
