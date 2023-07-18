import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PathologyPage } from './pathology.page';

describe('PathologyPage', () => {
  let component: PathologyPage;
  let fixture: ComponentFixture<PathologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PathologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
