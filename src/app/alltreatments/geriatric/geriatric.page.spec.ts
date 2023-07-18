import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeriatricPage } from './geriatric.page';

describe('GeriatricPage', () => {
  let component: GeriatricPage;
  let fixture: ComponentFixture<GeriatricPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GeriatricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
