import { Customer } from './../../../models/customer';
import { Action, createReducer, on } from '@ngrx/store';
import * as CustomerActions from '../action/customer.actions';

export const customerFeatureKey = 'customer';

export interface CustomerState {
  customers: ReadonlyArray<Customer>;
}

export const initialState: Readonly<CustomerState> = {
  customers: [],
};

export const customerReducer = createReducer(
  initialState,
  on(CustomerActions.addCustomer, (state: CustomerState, { customer }) => ({
    ...state,
    customers: [...state.customers, customer],
  })),
  on(CustomerActions.deleteCustomer, (state: CustomerState, { id }) => ({
    ...state,
    customers: [...state.customers.filter((c) => c.id !== id)],
  }))
);

export function reducer(state: CustomerState | undefined, action: Action): any {
  return customerReducer(state, action);
}
