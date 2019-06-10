import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'movements-insert',
  templateUrl: './movements-insert.component.html',
  styleUrls: ['./movements-insert.component.css']
})
export class MovementsInsertComponent implements OnInit {
  row: any = {};
  @Input() public submitCallback: (data: any) => void;
  insertMovementForm: FormGroup;

  date = new FormControl(new Date());

  constructor(public dialogRef: MatDialogRef<MovementsInsertComponent>) { }

  ngOnInit() {
    this.insertMovementForm = new FormGroup({
      'description': new FormControl(null, Validators.required),
      'category': new FormControl(null, Validators.required),
      'amount': new FormControl(null, Validators.required),
      'movement_date': new FormControl(null, Validators.required),
      'comment': new FormControl(),
    });
  }

  save() {
    if (this.insertMovementForm.valid) {
      this.dialogRef.close(this.insertMovementForm.value);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
