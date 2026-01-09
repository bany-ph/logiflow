import {Component, input} from '@angular/core';
import {Dashboard} from '../dashboard/dashboard';

@Component({
  selector: 'app-main-title',
  imports: [],
  templateUrl: './main-title.html',

})
export class MainTitle {
  mainTitle = input<string>("");
  mainDescription = input<string>("");
}
