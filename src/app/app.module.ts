import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
