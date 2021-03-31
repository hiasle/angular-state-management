import { CustomerState } from './../store/reducer/customer.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import { addCustomer } from '../store/action/customer.actions';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
})
export class CustomerAddComponent implements OnInit {
  constructor(private store: Store<CustomerState>) {}

  ngOnInit(): void {}

  addCustomer(customerName: string): void {
    this.store.dispatch(addCustomer(new Customer(customerName)));
  }
}
