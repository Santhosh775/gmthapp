import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MalaysiaPage } from './malaysia.page';

describe('MalaysiaPage', () => {
  let component: MalaysiaPage;
  let fixture: ComponentFixture<MalaysiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MalaysiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
