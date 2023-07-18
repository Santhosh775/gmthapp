import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EgyptPage } from './egypt.page';

describe('EgyptPage', () => {
  let component: EgyptPage;
  let fixture: ComponentFixture<EgyptPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EgyptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
