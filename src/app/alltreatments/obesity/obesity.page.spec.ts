import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObesityPage } from './obesity.page';

describe('ObesityPage', () => {
  let component: ObesityPage;
  let fixture: ComponentFixture<ObesityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ObesityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
