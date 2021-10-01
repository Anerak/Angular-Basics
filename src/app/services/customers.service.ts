import { Injectable } from '@angular/core';

// useClass version
export class CustomersServiceUseClass {
	private customers: Array<String> = [
		'Foo_useClass',
		'Bar_useClass',
		'John_useClass',
		'Dove_useClass',
	];

	constructor() {}

	public getCustomers(): Array<String> {
		return this.customers;
	}

	addCustomer(customer: String): void {
		this.customers.push(customer);
	}

	deleteCustomer(): void {
		this.customers.pop();
	}
}

// Use Existing

export class CustomersServiceUseExisting {
	private customers: Array<String> = [
		'Foo_useExisting',
		'Bar_useExisting',
		'John_useExisting',
		'Dove_useExisting',
	];

	constructor() {}

	public getCustomers(): Array<String> {
		return this.customers;
	}

	addCustomer(customer: String): void {
		this.customers.unshift(customer);
	}

	deleteCustomer(): void {
		this.customers.shift();
	}
}

// useFactory
export class CustomersServiceUseFactory {
	private customers: Array<String> = [
		'Foo_useFactory',
		'Bar_useFactory',
		'John_useFactory',
		'Dove_useFactory',
	];

	constructor() {}

	public getCustomers(): Array<String> {
		return this.customers;
	}

	addCustomer(customer: String): void {
		this.customers.push(customer);
	}

	deleteCustomer(): void {
		this.customers.pop();
	}
}

export function fCustomersServiceUseFactory() {
	return new CustomersServiceUseFactory();
}

@Injectable({ providedIn: 'root' })
// Original Service
export class CustomersService {
	private customers: Array<String> = [
		'Foo_default',
		'Bar_default',
		'John_default',
		'Dove_default',
	];

	constructor() {}

	public getCustomers(): Array<String> {
		return this.customers;
	}

	addCustomer(customer: String): void {
		this.customers.push(customer);
	}

	deleteCustomer(): void {
		this.customers.pop();
	}
}
