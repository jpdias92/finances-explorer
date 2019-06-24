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
  gender = null;
  birth_date = new FormControl(new Date());

  constructor(
    public dialogRef: MatDialogRef<MembersInsertComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.title = data.title;
      this.action = data.action;

      if ("id" in data) {
        this.name = data.member.name;
        this.gender = data.member.gender;
        this.birth_date = new FormControl(data.member.birth_date);
      }
    }

  ngOnInit() {
    this.insertMemberForm = new FormGroup({
      'name': new FormControl(this.name, Validators.required),
      'gender': new FormControl(String(this.gender), Validators.required),
      'birth_date': new FormControl(this.birth_date, Validators.required)
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
