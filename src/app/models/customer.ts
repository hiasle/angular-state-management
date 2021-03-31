import { v4 as uuidv4 } from 'uuid';

export class Customer {
  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
  }

  id: number;
  name: string;
}
