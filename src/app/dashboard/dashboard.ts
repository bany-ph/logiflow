import { Component } from '@angular/core';
import {Kpicard} from '../kpicard/kpicard';

@Component({
  selector: 'app-dashboard',
  imports: [
    Kpicard
  ],
  templateUrl: './dashboard.html'
})
export class Dashboard {

}
