import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-shipment-status',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './shipment-status.html'
})
export class ShipmentStatus {
    status = input.required<string>();

    containerClasses = computed(() => {

        switch (this.status()) {
            case 'Delivered':
            case 'Active':
                return 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800';

            case 'Delayed':
            case 'Inactive':
                return 'bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800';

            case 'Exception':
            case 'Blocked':
            case 'Incident':
                return 'bg-red-50 text-red-700 border-red-100 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800';

            case 'In Transit':
            default:
                return 'bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800';
        }
    });

    dotClasses = computed(() => {
        switch (this.status()) {
            case 'Delivered':
            case 'Active':
                return 'bg-emerald-500';

            case 'Delayed':
            case 'Inactive':
                return 'bg-orange-500';
            case 'Exception': 
            case 'Blocked': 
            case 'Incident':
                return 'bg-red-500';
            default: 
                return 'bg-indigo-500';
        }
    });
}