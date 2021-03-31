import * as fromCustomer from '../reducer/customer.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCustomerState = createFeatureSelector<fromCustomer.CustomerState>(
  fromCustomer.customerFeatureKey
);

export const selectCustomers = createSelector(
  selectCustomerState,
  (state: fromCustomer.CustomerState) => state.customers
);
