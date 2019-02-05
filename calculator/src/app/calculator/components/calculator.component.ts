import { Component, OnInit } from '@angular/core';

import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private number1: string;
  private number2: string;
  private result: number;
  private operation: string;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
  	this.clear()
  }

  /**
   * Initialize all variables to default value
   *
   * @return void
   */
  clear(): void {
  	this.number1 = '0';
	this.number2 = null;
	this.result = null;
	this.operation = null;
  }

  /**
   * Add the selected number to the subsequent calculation.
   *
   * @param string number
   * @return void
   */
  addNumber(number: string): void {
  	if (this.operation === null) {
  	  this.number1 = this.concatNumber(this.number1, number);
  	} else {
  	  this.number2 = this.concatNumber(this.number2, number);
  	}
  }

  /**
   * Returns the concatenated value. Handles the decimal separator.
   *
   * @param string currentNum
   * @param string numConcat
   * @return string
   */
  concatNumber(numAtual: string, numConcat: string): string {
  	if (numAtual === '0' || numAtual === null) {
  	  numAtual = '';
  	}
  	if (numConcat === '.' && numAtual === '') {
  	  return '0.';
  	}
  	if (numConcat === '.' && numAtual.indexOf('.') > -1) {
  	  return numAtual;
  	}
  	return numAtual + numConcat;
  }

  /**
   * Executa l�gica quando um operador for selecionado.
   * Caso j� possua uma opera��o selecionada, executa a 
   * opera��o anterior, e define a nova opera��o.
   *
   * @param string operacao
   * @return void
   */
  defineOperation(operation: string): void {
  	if (this.operation === null) {
      this.operation = operation;
      return;
  	}

  	if (this.number2 !== null) {
  		this.result = this.calculatorService.calcular(
  			parseFloat(this.number1), 
  			parseFloat(this.number2), 
  			this.operation);
  		this.operation = operation;
  		this.number1 = this.result.toString();
  		this.number2 = null;
  		this.result = null;
  	}
  }

  /**
   * Efetua o c�lculo de uma opera��o.
   *
   * @return void
   */
  calculate(): void {
  	if (this.number2 === null) {
  		return;
  	}

  	this.result = this.calculatorService.calcular(
  		parseFloat(this.number1), 
  		parseFloat(this.number2), 
  		this.operation);
  }

  /**
   * Retorna o valor a ser exibido na tela da calculator.
   *
   * @return string
   */
  get display(): string {
  	if (this.result !== null) {
  		return this.result.toString();
  	}
  	if (this.number2 !== null) {
  		return this.number2;
  	}
  	return this.number1;
  }

}
