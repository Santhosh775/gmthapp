import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingaporePage } from './singapore.page';

describe('SingaporePage', () => {
  let component: SingaporePage;
  let fixture: ComponentFixture<SingaporePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingaporePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
