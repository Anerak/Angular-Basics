import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[appHighlight]',
})
export class HighlightDirective {
	@Input('appHighlight') highlightColor: String = '';

	constructor(private el: ElementRef) {}

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight(this.highlightColor || 'red');
	}
	@HostListener('mouseleave') onMouseLeave() {
		this.highlight('unset');
	}

	private highlight(color: String) {
		this.el.nativeElement.style.backgroundColor = color;
	}
}
