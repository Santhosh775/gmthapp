import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicrobiologyPage } from './microbiology.page';

describe('MicrobiologyPage', () => {
  let component: MicrobiologyPage;
  let fixture: ComponentFixture<MicrobiologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MicrobiologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
