import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  public getCategories(): any {
    return this.httpClient.get(`${environment.host}/finances_explorer/categories/`);
  }

  public postCategory(formData: any) {
    return this.httpClient.post(`${environment.host}/finances_explorer/categories/`,
      {
        "name": formData.name
      });
  }

  public deleteCategory(formData: any) {
    return this.httpClient.delete(`${environment.host}/finances_explorer/categories/${formData.id}`);
  }

}
