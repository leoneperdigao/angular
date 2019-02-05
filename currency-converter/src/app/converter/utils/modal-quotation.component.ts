import { 
	Component, Input, Output, EventEmitter 
} from '@angular/core';

import { ConversionResponse } from '../models/conversion-response.model';
import { Conversion } from '../models/conversion.model';
import { ConverterService } from '../services/converter.service';

@Component({
	selector: 'modal-quotation',
	templateUrl: './modal-quotation.component.html'
})
export class ModalquotationComponent {

	@Input() id: string;
	@Input() conversionResponse: ConversionResponse;
	@Input() conversion: Conversion = new Conversion();
	@Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

	constructor(private converterService: ConverterService) {}

	newConsultation() {
		this.onConfirm.emit();
	}

	get convertedValue(): string {
	  	if (this.conversionResponse === undefined) {
	  		return '0';
	  	}
	  	
	  	return (this.conversion.value * 
	  		this.conversionResponse.rates[this.conversion.toCurrency])
	  			.toFixed(2);
	}

	get quotationTo(): number {
	  	return this.converterService.quotationTo(
	  		this.conversionResponse, this.conversion);
	}

	get quotationFrom(): string {
	  	return this.converterService.quotationFrom(
	  		this.conversionResponse, this.conversion);
	}

	get dataquotation(): string {
		return this.converterService.dataquotation(
	  		this.conversionResponse);
	}
}
