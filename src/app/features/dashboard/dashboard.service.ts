import { inject, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Card } from './model/card.model';
import { DASHBOARD_KPIS_MOCK } from './data/dashboard.mock';
import { HttpClient } from '@angular/common/http';
import { Shipment } from './model/shipment.model';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000';
  
  getDashboardKpis(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.apiUrl}/kpis`).pipe(
      delay(1500) 
    );
  }

  getRecentShipments(): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(`${this.apiUrl}/shipments`).pipe(
      delay(1000)
    );
  }
}