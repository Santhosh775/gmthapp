import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KoreasouthPage } from './koreasouth.page';

describe('KoreasouthPage', () => {
  let component: KoreasouthPage;
  let fixture: ComponentFixture<KoreasouthPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KoreasouthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
