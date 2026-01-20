import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../model/card.model';
import { GenericContainer } from '../../../../shared/generic-container/generic-container';

@Component({
  selector: 'app-kpicard',
  imports: [CommonModule, GenericContainer],
  templateUrl: './kpicard.html',
})
export class Kpicard {
   cards = input<Card[]>();
}



