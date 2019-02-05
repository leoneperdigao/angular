import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { currencyService, converterService } from '../services';
import { NumberDirective } from '../directives';
import { DataBrPipe } from '../pipes';
import { ModalquotationComponent } from '../utils';

import { converterComponent } from './converter.component';

describe('converterComponent', () => {
  let component: converterComponent;
  let fixture: ComponentFixture<converterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        converterComponent,
        NumberDirective,
        ModalquotationComponent,
        DataBrPipe 
      ],
      imports: [
        FormsModule,
        HttpModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        currencyService,
        converterService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(converterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
