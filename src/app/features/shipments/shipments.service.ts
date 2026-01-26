import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shipment } from '../dashboard/model/shipment.model'; 

@Injectable({
  providedIn: 'root'
})
export class ShipmentsService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/allShipments'; 

  getAllShipments(): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(this.apiUrl);
  }
}