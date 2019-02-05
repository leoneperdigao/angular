import { TestBed, inject } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TarefaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService]
    });
  });

  it('should ...', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));
});
