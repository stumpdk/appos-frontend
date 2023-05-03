import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { CustomerService } from '../shared/services/customer.service';
import { Customer } from '../shared/models/customer';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent {

  public id! : number;
  @Input() customer: Customer = { id: 0, name: '', email: '', phone: ''};
  @Input() showDetailsButton : boolean = false;
  @Input() showEditButton : boolean = true;
  @Input() showDeleteButton : boolean = true;


  constructor(private route: ActivatedRoute, private router : Router, private customerService : CustomerService) {
  }

  public deleteCustomer(customer : Customer) {
    this.customerService.DeleteCustomer(customer).subscribe((v) => {
        this.router.navigateByUrl('/customers');
    });
  }

  ngOnInit(): void {
    
    if(this.customer.id != 0) {
      return;
    }

    let id = this.route.snapshot.paramMap.get('id');
    
    if(id != null) {
      this.id = +id;
    }
    else{
      return;
    }

    this.customerService.GetCustomerById(this.id).subscribe(customer => {
      this.customer = customer;
    });
  }
}
