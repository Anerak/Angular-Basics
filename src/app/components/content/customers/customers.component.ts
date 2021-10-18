import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
	selector: 'app-customers',
	templateUrl: './customers.component.html',
	styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
	id!: String;
	customers: Array<String> = [];
	customer: String = '';

	constructor(
		private customersService: CustomersService,
		activatedRoute: ActivatedRoute
	) {
		activatedRoute.params.subscribe((params) => {
			this.id = params['id'];
		});
	}

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
