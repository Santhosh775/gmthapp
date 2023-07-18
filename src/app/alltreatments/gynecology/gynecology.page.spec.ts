import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GynecologyPage } from './gynecology.page';

describe('GynecologyPage', () => {
  let component: GynecologyPage;
  let fixture: ComponentFixture<GynecologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GynecologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
