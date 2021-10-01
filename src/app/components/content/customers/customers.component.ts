import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
	selector: 'app-customers',
	templateUrl: './customers.component.html',
	styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
	customers: Array<String> = [];
	customer: String = '';

	constructor(private customersService: CustomersService) {}

	ngOnInit(): void {
		this.customers = this.customersService.getCustomers();
	}

	addCustomer(customer: String) {
		this.customersService.addCustomer(this.customer);
		this.customer = '';
	}

	deleteCustomer() {
		this.customersService.deleteCustomer();
	}
}
