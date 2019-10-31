import { TestBed } from '@angular/core/testing';

import { LoadQuestionService } from './load-question.service';

describe('LoadQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadQuestionService = TestBed.get(LoadQuestionService);
    expect(service).toBeTruthy();
  });
});
