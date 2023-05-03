import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../shared/services/customer.service';
import { Customer } from '../shared/models/customer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})

export class CustomerAddComponent {
  
  public customer! : Customer;

  constructor(
    private customerService : CustomerService, 
    private route : Router
  ) {}

  public onSubmitted(customer: Customer) : void{
    this.customerService.AddCustomer(customer).subscribe(c => {
      this.route.navigate(['/customer/' + c.id]);
    });
  }
}
