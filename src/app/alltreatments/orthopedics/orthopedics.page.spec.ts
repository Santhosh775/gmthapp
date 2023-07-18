import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrthopedicsPage } from './orthopedics.page';

describe('OrthopedicsPage', () => {
  let component: OrthopedicsPage;
  let fixture: ComponentFixture<OrthopedicsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrthopedicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
