import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { of as ObservableOf } from "rxjs";

import { MovementsService } from './movements.service';
import { environment } from '../../../../environments/environment';

describe('MovementsService', () => {
  let movementsService: MovementsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovementsService]
    });

    movementsService = TestBed.get(MovementsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  // Verify if there are no outstanding requests
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([MovementsService], (service: MovementsService) => {
    expect(service).toBeTruthy();
  }));

  it('should get movements list', () => {
    movementsService.getMovements().subscribe((response: any) => {
      expect(response.value).toBe("Movements Returned.");
    });

    const req = httpMock.expectOne(`${environment.host}/finances_explorer/movements/`, 'get movements list');
    expect(req.request.method).toBe('GET');

    req.flush(ObservableOf("Movements Returned."));

    httpMock.verify();
  });

});
