import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Member } from '../../models/member';

@Component({
  selector: 'members-insert',
  templateUrl: './members-insert.component.html',
  styleUrls: ['./members-insert.component.css']
})
export class MembersInsertComponent implements OnInit {
  row: any = {};
  @Input() public submitCallback: (data: any) => void;
  insertMemberForm: FormGroup;

  title = null;
  action = null;

  name = null;
  personal_title = null;
  gender = null;
  nationality = null;
  birth_date = new FormControl(new Date());
  death_date = new FormControl();
  street_name = null;
  door_number = null;
  flat = null;
  postal_code = null;
  city = null;
  contact1 = null;
  contact2 = null;
  email = null;
  baptism_date = new FormControl();
  communion_date = new FormControl();
  confirmation_date = new FormControl();
  marital_status = null;
  partner_id = null;
  occupation = null;
  professional_qualifications = null;
  father_id = null;
  mother_id = null;

  constructor(
    public dialogRef: MatDialogRef<MembersInsertComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.title = data.title;
      this.action = data.action;

      if ("id" in data) {
        this.personal_title = data.member.personal_title;
        this.name = data.member.name;
        this.gender = data.member.gender;
        this.nationality = data.member.nationality;
        this.birth_date = new FormControl(data.member.birth_date);
        this.death_date = new FormControl(data.member.death_date);
        this.street_name = data.member.street_name;
        this.door_number = data.member.door_number;
        this.flat = data.member.flat;
        this.postal_code = data.member.postal_code;
        this.city = data.member.city;
        this.contact1 = data.member.contact1;
        this.contact2 = data.member.contact2;
        this.email = data.member.email;
        this.baptism_date = new FormControl(data.member.baptism_date);
        this.communion_date = new FormControl(data.member.communion_date);
        this.confirmation_date = new FormControl(data.member.confirmation_date);
        this.marital_status = data.member.marital_status;
        this.partner_id = data.member.partner_id;
        this.occupation = data.member.occupation;
        this.professional_qualifications = data.member.professional_qualifications;
        this.father_id = data.member.father_id;
        this.mother_id = data.member.mother_id;
      }
    }

  ngOnInit() {
    this.insertMemberForm = new FormGroup({
      'personal_title': new FormControl(this.personal_title),
      'name': new FormControl(this.name, Validators.required),
      'gender': new FormControl(String(this.gender), Validators.required),
      'nationality': new FormControl(this.nationality),
      'birth_date': new FormControl(this.birth_date, Validators.required),
      'death_date': new FormControl(this.death_date),
      'street_name': new FormControl(this.street_name),
      'door_number': new FormControl(this.door_number),
      'flat': new FormControl(this.flat),
      'postal_code': new FormControl(this.postal_code),
      'city': new FormControl(this.city),
      'contact1': new FormControl(this.contact1),
      'contact2': new FormControl(this.contact2),
      'email': new FormControl(this.email),
      'baptism_date': new FormControl(this.baptism_date),
      'communion_date': new FormControl(this.communion_date),
      'confirmation_date': new FormControl(this.confirmation_date),
      'marital_status': new FormControl(this.marital_status),
      'partner_id': new FormControl(this.partner_id),
      'occupation': new FormControl(this.occupation),
      'professional_qualifications': new FormControl(this.professional_qualifications),
      'father_id': new FormControl(this.father_id),
      'mother_id': new FormControl(this.mother_id),
    });
  }

  save() {
    if (this.insertMemberForm.valid) {
      this.dialogRef.close(this.insertMemberForm.value);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
