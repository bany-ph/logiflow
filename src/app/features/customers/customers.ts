import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MainTitle } from '../../shared/main-title/main-title';
import { GenericContainer } from '../../shared/generic-container/generic-container';
import { CustomersService } from './customers.service';
import { Observable } from 'rxjs';
import { Customer } from './model/customer.model';
import { ShipmentStatus } from '../../shared/shipment-status/shipment-status';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    AsyncPipe,
    MainTitle,
    GenericContainer,
     ShipmentStatus],
  templateUrl: './customers.html'
})
export class Customers {
  private customersService = inject(CustomersService);
  
  customers$: Observable<Customer[]> = this.customersService.getCustomers();
}
