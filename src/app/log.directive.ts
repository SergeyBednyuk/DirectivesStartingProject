import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
    selector: '[appLog]',
    standalone: true,
    host: {
        "(click)": 'onLog()'
    }
})
export class LogDirective {
    private elemRef = inject(ElementRef);


    constructor() {
    }

    onLog() {
        console.log('CLICKED!');
        console.log(this.elemRef.nativeElement);
    }
}
