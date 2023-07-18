import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfectiousPage } from './infectious.page';

describe('InfectiousPage', () => {
  let component: InfectiousPage;
  let fixture: ComponentFixture<InfectiousPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfectiousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
