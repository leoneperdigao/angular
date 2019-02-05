import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ConverterComponent } from './components';
import { CurrencyService, ConverterService } from './services';
import { NumberDirective } from './directives';
import { ModalquotationComponent } from './utils';
import { DataBrPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
  	ConverterComponent,
  	NumberDirective,
  	ModalquotationComponent,
  	DataBrPipe
  ],
  exports: [
  	ConverterComponent
  ],
  providers: [
  	CurrencyService,
    ConverterService
  ]
})
export class ConverterModule { }
