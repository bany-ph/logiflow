import { Component, inject } from '@angular/core';
import {Kpicard} from './components/kpicard/kpicard';
import {MainTitle} from '../../shared/main-title/main-title';
import { GraphicsCard } from './components/graphics-card/graphics-card';
import { MapWidget } from './components/map-widget/map-widget';
import { DASHBOARD_KPIS_MOCK } from './data/dashboard.mock';
import { AsyncPipe } from '@angular/common';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';
import { Card } from './model/card.model';
import { RecentShipments } from './components/recent-shipments/recent-shipments';
import { Shipment } from './model/shipment.model';

@Component({
  selector: 'app-dashboard',
  imports: [
    AsyncPipe,
    Kpicard,
    MainTitle,
    GraphicsCard,
    MapWidget,
    RecentShipments
  ],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  private dashboardService = inject(DashboardService);
  kpiData$!: Observable<Card[]>;
  shipments$!: Observable<Shipment[]>;
  
  pageTitle = 'Dashboard Overview';
  pageDescription = 'Real-time logistic metrics and fleet status.';
  
  ngOnInit() {
    
    this.kpiData$ = this.dashboardService.getDashboardKpis();
    this.shipments$ = this.dashboardService.getRecentShipments();
  }

}
