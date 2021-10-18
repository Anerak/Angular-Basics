import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './components/panel/panel.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
	declarations: [PanelComponent, ContentComponent],
	imports: [CommonModule],
	exports: [PanelComponent],
})
export class CustmoduleModule {}
