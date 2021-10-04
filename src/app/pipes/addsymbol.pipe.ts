import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'addsymbol',
})
export class AddsymbolPipe implements PipeTransform {
	transform(value: number, ...args: string[]): string {
		return `${args[0]}${value}`;
	}
}
