import { TestBed, inject } from '@angular/core/testing';

import { FlowchartService } from './flowchart.service';

describe('FlowchartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlowchartService]
    });
  });

  it('should be created', inject([FlowchartService], (service: FlowchartService) => {
    expect(service).toBeTruthy();
  }));
});
