import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Customers } from './features/customers/customers';
import { MainLayout } from './layout/main-layout/main-layout';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import("./features/dashboard/dashboard").then(m => m.Dashboard),
      },
      {
        path: 'customers',
        component: Customers
      }
    ]

  },
 
];
