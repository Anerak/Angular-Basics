import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  interpolationTest: String = 'foobar';
  counter: number = 0;
  doubleData: string = '';
  doubleDataAut: string = '';

  constructor() {}

  ngOnInit(): void {}

  modifyDouble(e: any) {
    this.doubleData = e.target.value;
  }
}
