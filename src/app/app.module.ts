import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentComponent } from './components/content/content.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BottombarComponent } from './components/bottombar/bottombar.component';
import { BindingComponent } from './components/content/binding/binding.component';
import { StructureComponent } from './components/content/structure/structure.component';
import { AttributesComponent } from './components/content/attributes/attributes.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FormsComponent } from './components/content/forms/forms.component';
import { CustomersComponent } from './components/content/customers/customers.component';
import {
	CustomersService,
	CustomersServiceUseClass,
	CustomersServiceUseExisting,
	fCustomersServiceUseFactory,
} from './services/customers.service';
import { UsersComponent } from './components/content/users/users.component';

@NgModule({
	declarations: [
		AppComponent,
		ContentComponent,
		TopbarComponent,
		BottombarComponent,
		BindingComponent,
		StructureComponent,
		AttributesComponent,
		HighlightDirective,
		FormsComponent,
		CustomersComponent,
		UsersComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	providers: [
		{ provide: CustomersService, useClass: CustomersService },
		// Use Class
		// { provide: CustomersService, useClass: CustomersServiceUseClass },
		// Use Existing
		//{ provide: CustomersService, useExisting: CustomersServiceUseExisting },
		// Use Factory
		//{ provide: CustomersService, useFactory: fCustomersServiceUseFactory },
		// Use Value
		/*{
			provide: CustomersService,
			useValue: {
				customers: ['A', 'B', 'C'],
				getCustomers(): Array<String> {
					return this.customers;
				},
				addCustomer(customer: String): void {
					this.customers.unshift(customer);
				},
				deleteCustomer(): void {
					this.customers.shift();
				},
			},
		},*/
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
