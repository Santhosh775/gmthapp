import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CzechrepublicPage } from './czechrepublic.page';

describe('CzechrepublicPage', () => {
  let component: CzechrepublicPage;
  let fixture: ComponentFixture<CzechrepublicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CzechrepublicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
