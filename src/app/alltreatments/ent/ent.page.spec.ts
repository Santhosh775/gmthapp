import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ENTPage } from './ent.page';

describe('ENTPage', () => {
  let component: ENTPage;
  let fixture: ComponentFixture<ENTPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ENTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
