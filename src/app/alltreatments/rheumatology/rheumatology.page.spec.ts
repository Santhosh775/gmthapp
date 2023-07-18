import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RheumatologyPage } from './rheumatology.page';

describe('RheumatologyPage', () => {
  let component: RheumatologyPage;
  let fixture: ComponentFixture<RheumatologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RheumatologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
