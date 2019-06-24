import { Injectable } from '@angular/core';
import {
  HttpClient
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
        "movement_date": this.datepipe.transform(formData.date.value, 'yyyy-MM-dd'),
        "description": formData.description, "comment": (formData.comment || "")
      });
  }

  public putMovement(movement_id: string, formData: any) {
    return this.httpClient.put(`${environment.host}/finances_explorer/movements/${movement_id}`,
      {
        "category_id": Number(formData.category), "amount": formData.amount,
        "movement_date": this.datepipe.transform(formData.date.value, 'yyyy-MM-dd'),
        "description": formData.description, "comment": (formData.comment || "")
      });
  }

  public deleteMovement(formData: any) {
    return this.httpClient.delete(`${environment.host}/finances_explorer/movements/${formData.id}`);
  }

}
