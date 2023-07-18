import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientsStoriesPage } from './patients-stories.page';

describe('PatientsStoriesPage', () => {
  let component: PatientsStoriesPage;
  let fixture: ComponentFixture<PatientsStoriesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PatientsStoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
