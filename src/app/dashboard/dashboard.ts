import { Component } from '@angular/core';
import {Kpicard} from '../kpicard/kpicard';
import {MainTitle} from '../main-title/main-title';

@Component({
  selector: 'app-dashboard',
  imports: [
    Kpicard,
    MainTitle
  ],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  pageTitle = 'Dashboard';
  pageDescription = 'Real-time logistic metrics and fleet status.';
}
