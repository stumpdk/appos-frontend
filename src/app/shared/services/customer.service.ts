import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl : string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl + "/Customers";
  }

  public getCustomers() : Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  public GetCustomerById(id: number) : Observable<Customer> {
    return this.http.get<Customer>(this.apiUrl + '/' + id);
  }

  public AddCustomer(customer: Customer) : Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  public UpdateCustomer(customer: Customer) : Observable<Customer> {
    return this.http.put<Customer>(this.apiUrl + '/' + customer.id, customer);
  }

  public DeleteCustomer(customer: Customer) : Observable<boolean> {
    return this.http.delete<boolean>(this.apiUrl + '/' + customer.id);
  }
}
