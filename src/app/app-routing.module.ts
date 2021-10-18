import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributesComponent } from './components/content/attributes/attributes.component';
import { BindingComponent } from './components/content/binding/binding.component';
import { CustomersComponent } from './components/content/customers/customers.component';
import { FormsComponent } from './components/content/forms/forms.component';
import { StructureComponent } from './components/content/structure/structure.component';
import { UsersMaterialComponent } from './components/content/users-material/users-material.component';
import { UsersComponent } from './components/content/users/users.component';

const routes: Routes = [
	{ path: '', redirectTo: 'binding', pathMatch: 'full' },
	{ path: 'attributes', component: AttributesComponent },
	{ path: 'binding', component: BindingComponent },
	{ path: 'customers', component: CustomersComponent },
	{ path: 'forms', component: FormsComponent },
	{ path: 'structure', component: StructureComponent },
	{ path: 'users', component: UsersComponent },
	{ path: 'users-material', component: UsersMaterialComponent },
	{ path: '**', redirectTo: 'binding' },
];

@NgModule({
	imports: [
		/*RouterModule.forRoot(routes)*/
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
