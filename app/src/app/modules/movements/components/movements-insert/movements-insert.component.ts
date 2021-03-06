import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/category';

@Component({
  selector: 'movements-insert',
  templateUrl: './movements-insert.component.html',
  styleUrls: ['./movements-insert.component.css']
})
export class MovementsInsertComponent implements OnInit {
  row: any = {};
  @Input() public submitCallback: (data: any) => void;
  insertMovementForm: FormGroup;

  title = null;
  action = null;

  description = null;
  category = null;
  amount = null;
  date = new FormControl(new Date());
  comment = null;

  categories: Category[] = null;

  constructor(
    public dialogRef: MatDialogRef<MovementsInsertComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.title = data.title;
      this.action = data.action;
      this.categories = data.categories;

      if ("id" in data) {
        this.description = data.description;
        this.category = data.category.id;
        this.amount = data.amount;
        this.date = new FormControl(data.date);
        this.comment = data.comment;
      }
    }

  ngOnInit() {
    this.insertMovementForm = new FormGroup({
      'description': new FormControl(this.description, Validators.required),
      'category': new FormControl(this.category, Validators.required),
      'amount': new FormControl(this.amount, Validators.required),
      'date': new FormControl(this.date, Validators.required),
      'comment': new FormControl(this.comment),
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
