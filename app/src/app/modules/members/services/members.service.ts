import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { DatePipe } from '@angular/common'

import { environment } from '../../../../environments/environment';

@Injectable()
export class MembersService {

  constructor(private httpClient: HttpClient,
    public datepipe: DatePipe) { }

  public getMembers(): any {
    return this.httpClient.get(`${environment.host}/finances_explorer/members/`);
  }

  public postMember(formData: any) {
    return this.httpClient.post(`${environment.host}/finances_explorer/members/`,
      {
        ...(formData.title && {"title": formData.title}),
        "name": formData.name,
        "gender": Number(formData.gender),
        ...(formData.nationality && {"nationality": formData.nationality}),
        "birth_date": this.datepipe.transform(formData.birth_date.value, 'yyyy-MM-dd'),
        ...(formData.death_date && {"death_date": this.datepipe.transform(formData.death_date, 'yyyy-MM-dd')}),
        ...(formData.street_name && {"street_name": formData.street_name}),
        ...(formData.door_number && {"door_number": formData.door_number}),
        ...(formData.flat && {"flat": formData.flat}),
        ...(formData.postal_code && {"postal_code": formData.postal_code}),
        ...(formData.city && {"city": formData.city}),
        ...(formData.contact1 && {"contact1": formData.contact1}),
        ...(formData.contact2 && {"contact2": formData.contact2}),
        ...(formData.email && {"email": formData.email}),
        ...(formData.baptism_date && {"baptism_date": this.datepipe.transform(formData.baptism_date, 'yyyy-MM-dd')}),
        ...(formData.communion_date && {"communion_date": this.datepipe.transform(formData.communion_date, 'yyyy-MM-dd')}),
        ...(formData.confirmation_date && {"confirmation_date": this.datepipe.transform(formData.confirmation_date, 'yyyy-MM-dd')}),
        ...(formData.marital_status && {"marital_status": formData.marital_status}),
        ...(formData.partner_id && {"partner_id": formData.partner_id}),
        ...(formData.occupation && {"occupation": formData.occupation}),
        ...(formData.professional_qualifications && {"professional_qualifications": formData.professional_qualifications}),
        ...(formData.father_id && {"father_id": formData.father_id}),
        ...(formData.mother_id && {"mother_id": formData.mother_id}),
      });
  }

  public putMember(member_id: string, formData: any) {
    return this.httpClient.put(`${environment.host}/finances_explorer/members/${member_id}`,
    {
      ...(formData.title && {"title": formData.title}),
      "name": formData.name,
      "gender": Number(formData.gender),
      ...(formData.nationality && {"nationality": formData.nationality}),
      "birth_date": this.datepipe.transform(formData.birth_date.value, 'yyyy-MM-dd'),
      ...(formData.death_date && {"death_date": this.datepipe.transform(formData.death_date, 'yyyy-MM-dd')}),
      ...(formData.street_name && {"street_name": formData.street_name}),
      ...(formData.door_number && {"door_number": formData.door_number}),
      ...(formData.flat && {"flat": formData.flat}),
      ...(formData.postal_code && {"postal_code": formData.postal_code}),
      ...(formData.city && {"city": formData.city}),
      ...(formData.contact1 && {"contact1": formData.contact1}),
      ...(formData.contact2 && {"contact2": formData.contact2}),
      ...(formData.email && {"email": formData.email}),
      ...(formData.baptism_date && {"baptism_date": this.datepipe.transform(formData.baptism_date, 'yyyy-MM-dd')}),
      ...(formData.communion_date && {"communion_date": this.datepipe.transform(formData.communion_date, 'yyyy-MM-dd')}),
      ...(formData.confirmation_date && {"confirmation_date": this.datepipe.transform(formData.confirmation_date, 'yyyy-MM-dd')}),
      ...(formData.marital_status && {"marital_status": formData.marital_status}),
      ...(formData.partner_id && {"partner_id": formData.partner_id}),
      ...(formData.occupation && {"occupation": formData.occupation}),
      ...(formData.professional_qualifications && {"professional_qualifications": formData.professional_qualifications}),
      ...(formData.father_id && {"father_id": formData.father_id}),
      ...(formData.mother_id && {"mother_id": formData.mother_id}),
    });
  }

  public deleteMember(formData: any) {
    return this.httpClient.delete(`${environment.host}/finances_explorer/members/${formData.id}`);
  }

}
