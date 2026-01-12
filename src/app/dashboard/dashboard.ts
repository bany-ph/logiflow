import { Component } from '@angular/core';
import {Kpicard} from '../kpicard/kpicard';
import {MainTitle} from '../main-title/main-title';
import { GraphicsCard } from '../graphics-card/graphics-card';
import { MapWidget } from '../map-widget/map-widget';

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
}
