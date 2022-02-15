import { CardsService } from './cards.service'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {TestBed} from "@angular/core/testing";

describe('CardsService', () => {
let service: CardsService;

  beforeEach(() => {
    service = new CardsService();
  });

  it('should be created', () => {
    const service = new CardsService;
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {

    expect(service.getById).toBeTruthy();
  });
})
