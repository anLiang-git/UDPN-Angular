import { TestBed } from '@angular/core/testing';

import { NodeListService } from './node-list.service';

describe('NodeListService', () => {
  let service: NodeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
