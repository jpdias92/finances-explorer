import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse
} from '@angular/common/http';
import { DatePipe } from '@angular/common'

import { environment } from '../../../../environments/environment';

@Injectable()
export class MovementsService {

  constructor(private httpClient: HttpClient,
    public datepipe: DatePipe) { }

  public getMovements(): any {
    return this.httpClient.get(`${environment.host}/finances_explorer/movements/`);
  }

  public postMovement(formData: any) {
    return this.httpClient.post(`${environment.host}/finances_explorer/movements/`,
      {
        "category_id": Number(formData.category), "amount": formData.amount,
        "movement_date": this.datepipe.transform(formData.movement_date, 'yyyy-MM-dd'),
        "description": formData.description, "comment": (formData.comment || "")
      });
  }

}
