import { 
	Directive, 
	HostListener, 
	ElementRef 
} from '@angular/core';
import { 
  NG_VALUE_ACCESSOR, 
  ControlValueAccessor 
} from '@angular/forms';

@Directive({
  selector: '[number]',
  providers: [{
    provide: NG_VALUE_ACCESSOR, 
    useExisting: NumberDirective, 
    multi: true 
  }]
})
export class NumberDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) {}

  /**
   * Implement keyup event for the policy element.
   * 
   * @param any $event
   */
  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let value = $event.target.value;
    let posDecimais = value.indexOf('.');

    value = value.replace(/[\D]/g, '');

    if (posDecimais > 0) {
      value = value.substr(0, posDecimais) + '.' + 
        value.substr(posDecimais);
    }

    $event.target.value = value;
    this.onChange(value);
  }

  /**
   * Registers function to be called to update
   *  value in the model.
   * 
   * @param any fn
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registers function to be called to update
   *  value in the model for touched event.
   * 
   * @param any fn
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Get the value contained in the model.
   * 
   * @param any value
   */
  writeValue(value: any): void {
  	this.el.nativeElement.value = value;
  }

}
