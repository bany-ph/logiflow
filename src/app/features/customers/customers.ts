import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MainTitle } from '../../shared/main-title/main-title';
import { GenericContainer } from '../../shared/generic-container/generic-container';
import { CustomersService } from './customers.service';
import { Observable } from 'rxjs';
import { Customer } from './model/customer.model';
import { ShipmentStatus } from '../../shared/shipment-status/shipment-status';
import {CustomersKpiCard} from './components/customers-kpi-card/customers-kpi-card';
import {CustomerResume} from './model/resume.model';
import {SearchBar} from '../../shared/search-bar/search-bar';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    AsyncPipe,
    MainTitle,
    GenericContainer,
    ShipmentStatus,
    CustomersKpiCard,
    SearchBar
  ],
  templateUrl: './customers.html'
})
export class Customers {
  private customersService = inject(CustomersService);
  customers$: Observable<Customer[]> = this.customersService.getCustomers();
  resume$: Observable<CustomerResume[]> = this.customersService.getResume();

  ngOnInit(){


  }

}
