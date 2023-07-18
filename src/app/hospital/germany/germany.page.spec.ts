import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { GermanyPage } from './germany.page';

describe('GermanyPage', () => {
  let component: GermanyPage;
  let fixture: ComponentFixture<GermanyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GermanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
