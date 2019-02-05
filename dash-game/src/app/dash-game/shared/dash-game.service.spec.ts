import { TestBed, inject } from '@angular/core/testing';
import { DashGameService } from './dash-game.service';

describe('DashGameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashGameService]
    });
  });

  it('should ...', inject([DashGameService], (service: DashGameService) => {
    expect(service).toBeTruthy();
  }));
});
