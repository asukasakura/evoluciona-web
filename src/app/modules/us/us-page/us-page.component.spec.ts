import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsPAgeComponent } from './us-page.component';

describe('UsPAgeComponent', () => {
  let component: UsPAgeComponent;
  let fixture: ComponentFixture<UsPAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsPAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
