import { inject, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Card } from './model/card.model';
import { DASHBOARD_KPIS_MOCK } from './data/dashboard.mock';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/kpis';
  // Simulamos una petición HTTP GET
  
  getDashboardKpis(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl).pipe(
      delay(1500) 
    );
  }
}