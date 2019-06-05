import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse
} from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable()
export class MovementsService {

  constructor(private httpClient: HttpClient) { }

  public getMovements():any{
    return this.httpClient.get(`${environment.host}/finances_explorer/movements/`);
  }

}
