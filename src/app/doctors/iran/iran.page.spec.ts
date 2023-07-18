import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IranPage } from './iran.page';

describe('IranPage', () => {
  let component: IranPage;
  let fixture: ComponentFixture<IranPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
