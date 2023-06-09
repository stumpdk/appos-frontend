import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/new', component: CustomerAddComponent },
  { path: 'customer/:id', component: CustomerComponent },
  { path: 'customer/:id/edit', component: CustomerEditComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
