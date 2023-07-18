import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartneredPage } from './partnered.page';

describe('PartneredPage', () => {
  let component: PartneredPage;
  let fixture: ComponentFixture<PartneredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PartneredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
