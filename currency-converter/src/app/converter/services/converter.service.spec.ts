import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ConverterService } from './converter.service';

describe('converterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      	ConverterService
      ],
      imports: [
      	HttpModule
      ]
    });
  });

  it('should ...', inject([ConverterService], (service: ConverterService) => {
    expect(service).toBeTruthy();
  }));
});
