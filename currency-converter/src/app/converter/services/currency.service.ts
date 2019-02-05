import { Injectable } from '@angular/core';

import { Currency } from '../models';

@Injectable()
export class CurrencyService {

  private currencys: Currency[];

  constructor() {}

  private currencysObj = [ //http://fixer.io
	{ "initials": "AUD", "description": "Australian Dollar" },
	{ "initials": "BGN", "description": "Bulgarian Lev" },
	{ "initials": "BRL", "description": "Brazilian real" },
    { "initials": "CAD", "description": "Canadian dollar"},
    { "initials": "CHF", "description": "Swiss Franc"},
    { "initials": "CNY", "description": "Chinese Yuan"},
    { "initials": "CZK", "description": "Czech Republic Crown"},
    { "initials": "DKK", "description": "Danish krona"},
    { "initials": "EUR", "description": "Euro"},
    { "initials": "GBP", "description": "Pound Sterling"},
    { "initials": "HKD", "description": "Hong Kong Dollar"},
    { "initials": "HRK", "description": "Croatian Crown"},
    { "initials": "HUF", "description": "Florim hÃºngaro"},
    { "initials": "IDR", "description": "Indonesian rupee"},
    { "initials": "ILS", "description": "New Israeli shekel"},
    { "initials": "INR", "description": "Indian Rupee"},
    { "initials": "JPY", "description": "Japanese yen"},
    { "initials": "KRW", "description": "South Korean Won"},
    { "initials": "MXN", "description": "Mexican peso"},
    { "initials": "MYR", "description": "Malaysian Ringgit"},
    { "initials": "NOK", "description": "Norwegian Crown"},
    { "initials": "NZD", "description": "New Zealand Dollar"},
    { "initials": "PHP", "description": "Philippine Peso"},
    { "initials": "PLN", "description": "Polish Złoty"},
    { "initials": "RON", "description": "Romanian Leu"},
    { "initials": "RUB", "description": "Belarus Ruble"},
    { "initials": "SEK", "description": "Swiss krona"},
    { "initials": "SGD", "description": "Singapore Dollar"},
    { "initials": "THB", "description": "Baht Thailand"},
    { "initials": "TRY", "description": "Turkish lira"},
    { "initials": "USD", "description": "United States dollar"},
    { "initials": "ZAR", "description": "Rand South Africa"}
  ];

  fetchAll(): Currency[] {
  	if (this.currencys) {
  		return this.currencys;
  	} 
  	
  	this.currencys = [];

  	for (let currencyObj of this.currencysObj) {
  		let currency: Currency = new Currency();
  		Object.assign(currency, currencyObj);
  		this.currencys.push(currency);
  	}

  	return this.currencys;
  }

}
