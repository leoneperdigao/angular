import { TestBed, inject } from '@angular/core/testing';
import { CurrencyService } from './currency.service';

describe('currencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyService]
    });
  });

  it('should ...', inject([CurrencyService], (service: CurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
