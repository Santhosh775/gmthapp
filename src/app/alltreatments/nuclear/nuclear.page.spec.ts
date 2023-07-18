import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuclearPage } from './nuclear.page';

describe('NuclearPage', () => {
  let component: NuclearPage;
  let fixture: ComponentFixture<NuclearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuclearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
