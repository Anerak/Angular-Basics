import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Material Modules */

import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersMaterialComponent } from './components/content/users-material/users-material.component';
import { AddsymbolPipe } from './pipes/addsymbol.pipe';

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
  UsersMaterialComponent,
  AddsymbolPipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		A11yModule,
		ClipboardModule,
		CdkStepperModule,
		CdkTableModule,
		CdkTreeModule,
		DragDropModule,
		MatAutocompleteModule,
		MatBadgeModule,
		MatBottomSheetModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatStepperModule,
		MatDatepickerModule,
		MatDialogModule,
		MatDividerModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
		MatTreeModule,
		OverlayModule,
		PortalModule,
		ScrollingModule,
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
