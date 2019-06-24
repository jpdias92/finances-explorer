import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { of as ObservableOf } from "rxjs";

import { MembersService } from './members.service';
import { environment } from '../../../../environments/environment';

describe('MovementsService', () => {
  let membersService: MembersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MembersService]
    });

    membersService = TestBed.get(MembersService);
    httpMock = TestBed.get(HttpTestingController);
  });

  // Verify if there are no outstanding requests
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([MembersService], (service: MembersService) => {
    expect(service).toBeTruthy();
  }));

  it('should get members list', () => {
    membersService.getMembers().subscribe((response: any) => {
      expect(response.value).toBe("Members Returned.");
    });

    const req = httpMock.expectOne(`${environment.host}/finances_explorer/members/`, 'get members list');
    expect(req.request.method).toBe('GET');

    req.flush(ObservableOf("Members Returned."));

    httpMock.verify();
  });

});
