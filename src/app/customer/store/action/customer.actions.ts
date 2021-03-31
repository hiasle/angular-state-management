import { createAction, props } from '@ngrx/store';
import { Customer } from '../../../models/customer';

export const addCustomer = createAction(
  '[Customer] Add Customer',
  (customer: Customer) => ({ customer })
);

export const deleteCustomer = createAction(
  '[Customer] Delete Customer',
  (id: number) => ({ id })
);
