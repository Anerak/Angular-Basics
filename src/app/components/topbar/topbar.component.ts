import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTabNav } from '@angular/material/tabs';

@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
	@Input() title = '';

	@ViewChild(MatTabNav) foo = MatTabNav;

	constructor() {}

	ngOnInit(): void {}
}
