import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kpicard } from './kpicard';

describe('Kpicard', () => {
  let component: Kpicard;
  let fixture: ComponentFixture<Kpicard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kpicard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kpicard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
