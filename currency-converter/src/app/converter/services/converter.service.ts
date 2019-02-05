import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { 
	Conversion,
	ConversionResponse 
} from '../models';

@Injectable()
export class ConverterService {

  //private readonly BASE_URL = "http://api.fixer.io/latest";
  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3";

  constructor(private http: HttpClient) {}

  /**
   * Performs the call to the currencys conversion API.
   *
   * @param conversion conversion
   * @return Observable<conversionResponse>
   */
  converter(conversion: Conversion): Observable<any> {
  	let params = `&base=${conversion.fromCurrency}&symbols=${conversion.toCurrency}`;
  	return this.http
      .get(this.BASE_URL + params);
      //.map(response => response.json() as conversionResponse)
      //.catch(error => Observable.throw(error));
  }

  /**
   * Returns a quotation
   *
   * @param conversionResponse conversionResponse
   * @param conversion conversion
   * @return number
   */
  quotationTo(conversionResponse: ConversionResponse, 
		conversion: Conversion): number {
  	if (conversionResponse === undefined) {
  		return 0;
  	}

  	return conversionResponse.rates[conversion.toCurrency];
  }

  /**
   * Returns a quotation
   *
   * @param conversionResponse conversionResponse
   * @param conversion conversion
   * @return string
   */
  quotationFrom(conversionResponse: ConversionResponse, 
		conversion: Conversion): string {
  	if (conversionResponse === undefined) {
  		return '0';
  	}

  	return (1 / conversionResponse.rates[conversion.toCurrency])
  		.toFixed(4);
  }

  /**
   * Returns date of quotation
   *
   * @param conversionResponse conversionResponse
   * @return string
   */
  dataquotation(conversionResponse: ConversionResponse): string {
    if (conversionResponse === undefined) {
      return '';
    }

    return conversionResponse.date;
  }

}
