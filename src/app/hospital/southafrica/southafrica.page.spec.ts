import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouthafricaPage } from './southafrica.page';

describe('SouthafricaPage', () => {
  let component: SouthafricaPage;
  let fixture: ComponentFixture<SouthafricaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouthafricaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
