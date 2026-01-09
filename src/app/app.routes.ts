import { Routes } from '@angular/router';
import {Dashboard} from './dashboard/dashboard';
import {Customers} from './customers/customers';


export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'customers',
    component: Customers
  }
];
