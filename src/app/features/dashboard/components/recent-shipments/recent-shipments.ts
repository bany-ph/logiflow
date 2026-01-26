import { Component, input } from '@angular/core'; 
import { GenericContainer } from '../../../../shared/generic-container/generic-container';
import { Shipment } from '../../model/shipment.model';
import { ShipmentStatus } from '../../../../shared/shipment-status/shipment-status';
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-recent-shipments',
    standalone: true,
    imports: [
    GenericContainer,
    ShipmentStatus,
    RouterLink
],
    templateUrl: './recent-shipments.html'
})
export class RecentShipments {
    shipments = input.required<Shipment[]>();
}