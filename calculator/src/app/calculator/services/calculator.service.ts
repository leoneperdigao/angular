/**
 * Service responsible for performing the operations of the calculator.
 * 
 * @author Leone Perdig�o<leone.lage@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  /**
  * Defines the constants used to identify the calculation operation
  */
  static readonly SUM: string = '+';
  static readonly SUBSTRACTION: string = '-';
  static readonly DIVISION: string = '/';
  static readonly MULTIPLICATION: string = '*';

  constructor() { }

  /**
   * Method that calculates a given math operation
    * two numbers.
    * Supports operations Add, subtract, split,
    * and multiplication.
    *
    * @param num1 number
    * @param num2 number
    * @param operation string Operation to be executed
    * @return number Operating result
   */
  calcular(num1: number, num2: number, operation: string): number {
      let result: number; // stores the result of the operation
      
  	switch(operation) {
  	  case CalculatorService.SUM:
  	    result = num1 + num2;
  		break;
  	  case CalculatorService.SUBSTRACTION:
  	    result = num1 - num2;
  		break;
  	  case CalculatorService.DIVISION:
  	    result = num1 / num2;
  		break;
  	  case CalculatorService.MULTIPLICATION:
  	    result = num1 * num2;
  		break;
  	  default:
  	    result = 0;
  	}

  	return result;
  }

}
