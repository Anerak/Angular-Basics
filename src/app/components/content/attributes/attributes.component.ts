import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-attributes',
    templateUrl: './attributes.component.html',
    styleUrls: ['./attributes.component.css'],
})
export class AttributesComponent implements OnInit {
    currStateStyle: boolean = true;
    currStateClass: boolean = true;
    constructor() {}

    ngOnInit(): void {}

    getStateStyle(state: boolean) {
        return {
            color: state ? 'white' : 'red',
            backgroundColor: state ? 'red' : 'white',
        };
    }

    getStateClass(state: boolean) {
        return { relax: state, danger: !state };
    }
}
