import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GastroenterologyPage } from './gastroenterology.page';

describe('GastroenterologyPage', () => {
  let component: GastroenterologyPage;
  let fixture: ComponentFixture<GastroenterologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GastroenterologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
