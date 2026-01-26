import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersKpiCard } from './customers-kpi-card';

describe('CustomersKpiCard', () => {
  let component: CustomersKpiCard;
  let fixture: ComponentFixture<CustomersKpiCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersKpiCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersKpiCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
