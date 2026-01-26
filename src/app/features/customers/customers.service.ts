import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { Customer } from './model/customer.model';
import {CustomerResume} from './model/resume.model';

interface CustomersResponse {
  data: Customer[];
  resume: CustomerResume[];
}

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/customers';

  getCustomers(): Observable<Customer[]> {

    return this.http.get<CustomersResponse>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }

  getResume(): Observable<CustomerResume[]> {

    return this.http.get<CustomersResponse>(this.apiUrl).pipe(
      map(response => response.resume)
    );
  }

}
