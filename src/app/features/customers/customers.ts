import { Component } from '@angular/core';
import { MainTitle } from '../../shared/main-title/main-title';

@Component({
  selector: 'app-customers',
  imports: [MainTitle],
  templateUrl: './customers.html',
})
export class Customers {
  pageTitle = 'Customers'
  pageDescription = ''
}
