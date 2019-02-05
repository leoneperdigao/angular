import { TestBed, inject } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('Should create the service', inject([CalculatorService], 
  	(service: CalculatorService) => {
    	expect(service).toBeTruthy();
  	}
  ));

  it('Should ensure that 1 + 4 = 5', 
    inject([CalculatorService], (service: CalculatorService) => {
      let sum = service.calcular(1, 4, CalculatorService.SUM);
      expect(sum).toEqual(5);
    })
  );

  it('Should ensure that 1 - 4 = -3', 
    inject([CalculatorService], (service: CalculatorService) => {
      let sub = service.calcular(1, 4, CalculatorService.SUBSTRACTION);
      expect(sub).toEqual(-3);
    })
  );

  it('Should ensure that 1 / 4 = 0.25', 
    inject([CalculatorService], (service: CalculatorService) => {
      let div = service.calcular(1, 4, CalculatorService.DIVISION);
      expect(div).toEqual(0.25);
    })
  );

  it('Should ensure that 1 * 4 = 4', 
    inject([CalculatorService], (service: CalculatorService) => {
      let multi = service.calcular(1, 4, CalculatorService.MULTIPLICATION);
      expect(multi).toEqual(4);
    })
  );

  it('Should return zero for invalid operation', 
    inject([CalculatorService], (service: CalculatorService) => {
      let invalidOperation = service.calcular(1, 4, '%');
      expect(invalidOperation).toEqual(0);
    })
  );

});
