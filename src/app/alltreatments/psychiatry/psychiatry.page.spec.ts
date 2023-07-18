import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsychiatryPage } from './psychiatry.page';

describe('PsychiatryPage', () => {
  let component: PsychiatryPage;
  let fixture: ComponentFixture<PsychiatryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PsychiatryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
