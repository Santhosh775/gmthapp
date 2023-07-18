import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SexualPage } from './sexual.page';

describe('SexualPage', () => {
  let component: SexualPage;
  let fixture: ComponentFixture<SexualPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SexualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
