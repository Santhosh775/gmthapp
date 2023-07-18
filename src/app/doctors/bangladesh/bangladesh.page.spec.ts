import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BangladeshPage } from './bangladesh.page';

describe('BangladeshPage', () => {
  let component: BangladeshPage;
  let fixture: ComponentFixture<BangladeshPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BangladeshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
