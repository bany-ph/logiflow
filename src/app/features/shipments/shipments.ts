import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MainTitle } from '../../shared/main-title/main-title';
import { GenericContainer } from '../../shared/generic-container/generic-container';
import { ShipmentsService } from './shipments.service';
import { ShipmentStatus } from '../../shared/shipment-status/shipment-status';
import { TablePagination } from '../../shared/table-pagination/table-pagination';


@Component({
  selector: 'app-shipments',
  standalone: true,
  imports: [
    AsyncPipe, 
    MainTitle, 
    GenericContainer, 
    ShipmentStatus,
    TablePagination],
  templateUrl: './shipments.html'
})
export class Shipments {
  private shipmentsService = inject(ShipmentsService);
  shipments$ = this.shipmentsService.getAllShipments();

  totalItems = 128; // Esto vendría del backend idealmente
  currentPage = 1;

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    // Aquí llamarías al servicio para cargar la página X:
    // this.shipments$ = this.shipmentsService.getAllShipments(newPage);
    console.log('Cargar página:', newPage);
  }
}