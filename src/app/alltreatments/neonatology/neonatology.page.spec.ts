import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NeonatologyPage } from './neonatology.page';

describe('NeonatologyPage', () => {
  let component: NeonatologyPage;
  let fixture: ComponentFixture<NeonatologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NeonatologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
