import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ModalquotationComponent } from './modal-quotation.component';
import { DataBrPipe } from '../pipes';
import { converterService } from '../services';

describe('ModalquotationComponent', () => {
  let component: ModalquotationComponent;
  let fixture: ComponentFixture<ModalquotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ModalquotationComponent, 
        DataBrPipe 
      ],
      providers: [
        converterService
      ],
      imports: [
        HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalquotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
