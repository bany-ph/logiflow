import {Component, input} from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Breadcrumb {
  label: string;
  url?: string; 
}

@Component({
  selector: 'app-main-title',
  imports: [RouterLink],
  templateUrl: './main-title.html',

})
export class MainTitle {
  mainTitle = input.required<string>();
  mainDescription = input<string>('');
  breadcrumbs = input<Breadcrumb[]>([]);
}
