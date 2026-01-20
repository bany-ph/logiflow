import { Component } from '@angular/core';
import {Kpicard} from './components/kpicard/kpicard';
import {MainTitle} from '../../shared/main-title/main-title';
import { GraphicsCard } from './components/graphics-card/graphics-card';
import { MapWidget } from './components/map-widget/map-widget';
import { DASHBOARD_KPIS_MOCK } from './data/dashboard.mock';

@Component({
  selector: 'app-dashboard',
  imports: [
    Kpicard,
    MainTitle,
    GraphicsCard,
    MapWidget
  ],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  pageTitle = 'Dashboard Overview';
  pageDescription = 'Real-time logistic metrics and fleet status.';
  cardsMock = DASHBOARD_KPIS_MOCK;
}
