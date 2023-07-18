import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnesthesiologyPage } from './anesthesiology.page';

describe('AnesthesiologyPage', () => {
  let component: AnesthesiologyPage;
  let fixture: ComponentFixture<AnesthesiologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnesthesiologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
