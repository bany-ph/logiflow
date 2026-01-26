import {Component, input} from '@angular/core';
import {GenericContainer} from '../../../../shared/generic-container/generic-container';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-customers-kpi-card',
  imports: [
    GenericContainer,
    NgClass
  ],
  templateUrl: './customers-kpi-card.html',
})
export class CustomersKpiCard {
    title = input<string>();
    percentage = input<number>(0);
    total = input<number>();
}
