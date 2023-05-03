import { Component } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';
import { Customer } from '../shared/models/customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})

export class CustomerEditComponent {
  
  public customer! : Customer;
  private customerId? : number;

  constructor(
    private customerService : CustomerService, 
    private route : Router, 
    private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['id'] != undefined){
        this.customerService.GetCustomerById(params['id']).subscribe(c => {
          this.customer = c;
          this.customerId = c.id;
        });
      }
    });
  }

  public onSubmitted(customer: Customer) : void {
    customer.id = this.customerId;
    this.customerService.UpdateCustomer(customer).subscribe(c => {
      this.route.navigate(['/customer/' + c.id]);
    });
  }
}
