import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-binding',
	templateUrl: './binding.component.html',
	styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
	interpolationTest: String = 'foobar';
	counter: number = 0;
	counterInit: number = 0;
	doubleData: string = '';
	doubleDataAut: string = '';
	initTimer: any;

	constructor() {}

	ngOnInit(): void {
		console.log('BindingComponent -> ngOnInit');
		this.initTimer = setInterval(() => {
			this.counterInit++;
			console.log(this.counterInit);
		}, 1000);
	}

	ngDoCheck(): void {
		console.log('BindingComponent -> ngDoCheck');
	}

	ngOnDestroy(): void {
		console.log('BindingComponent -> ngDestroy');
		clearInterval(this.initTimer);
	}

	modifyDouble(e: any) {
		this.doubleData = e.target.value;
	}
}
