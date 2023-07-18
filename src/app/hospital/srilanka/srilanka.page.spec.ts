import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SrilankaPage } from './srilanka.page';

describe('SrilankaPage', () => {
  let component: SrilankaPage;
  let fixture: ComponentFixture<SrilankaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SrilankaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
