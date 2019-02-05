import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Currency, Conversion, ConversionResponse } from '../models';
import { CurrencyService, ConverterService } from '../services';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  private currencys: Currency[];
  private conversion: Conversion;
  private hasError: boolean;
  private conversionResponse: ConversionResponse;

  @ViewChild("conversionForm") conversionForm: NgForm;

  constructor(
    private currencyService: CurrencyService,
    private converterService: ConverterService) {}

  ngOnInit() {
  	this.currencys = this.currencyService.fetchAll();
  	this.init();
  }

  /**
   * initialize
   *
   * @return void
   */
  init(): void {
  	this.conversion = new Conversion('USD', 'BRL', null);
  	this.hasError = false;
  }

  /**
   * Calls the value for conversion.
   *
   * @return void
   */
  converter(): void {
  	if (this.conversionForm.form.valid) {
  	  this.converterService
        .converter(this.conversion)
  	  	.subscribe(
  		    response => this.conversionResponse = response,
          error => this.hasError = true
        );
  	}
  }

}
