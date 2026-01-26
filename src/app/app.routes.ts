import { Routes } from '@angular/router';

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
        loadComponent: () => import("./features/customers/customers").then(m => m.Customers),
      },
      {
        path: 'shipments',
        loadComponent: () => import("./features/shipments/shipments").then(m => m.Shipments),
      },
      
    ]

  },
 
];
