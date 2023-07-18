import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CosmeticPage } from './cosmetic.page';

describe('CosmeticPage', () => {
  let component: CosmeticPage;
  let fixture: ComponentFixture<CosmeticPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CosmeticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
