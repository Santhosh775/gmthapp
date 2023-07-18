import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaiwanPage } from './taiwan.page';

describe('TaiwanPage', () => {
  let component: TaiwanPage;
  let fixture: ComponentFixture<TaiwanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TaiwanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
