import {
  selectCustomerState,
  selectCustomers,
} from './../store/selector/customer.selectors';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerState } from '../store/reducer/customer.reducer';
import { deleteCustomer } from '../store/action/customer.actions';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss'],
})
export class CustomerViewComponent implements OnInit {
  customers$: Observable<readonly Customer[]>;

  constructor(private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers));
  }

  ngOnInit(): void {
    this.customers$.subscribe(console.log);
  }

  deleteCustomer(customer: Customer): void {
    this.store.dispatch(deleteCustomer(customer.id));
  }
}
