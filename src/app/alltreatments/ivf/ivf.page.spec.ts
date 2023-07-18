import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IVFPage } from './ivf.page';

describe('IVFPage', () => {
  let component: IVFPage;
  let fixture: ComponentFixture<IVFPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IVFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
