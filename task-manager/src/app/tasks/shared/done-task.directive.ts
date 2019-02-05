import { 
	Directive, ElementRef, Input, OnInit 
} from '@angular/core';

@Directive({ selector: '[doneTask]' })
export class DoneTaskDirective implements OnInit  {
   @Input() doneTask: boolean;

    constructor(private el: ElementRef) {}

    ngOnInit() {
      if (this.doneTask) {
        this.el.nativeElement.style.textDecoration = "line-through";
      }
    }
}
