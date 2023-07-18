import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrancePage } from './france.page';

describe('FrancePage', () => {
  let component: FrancePage;
  let fixture: ComponentFixture<FrancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FrancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
