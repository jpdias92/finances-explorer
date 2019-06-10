import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  item: any;
  action: string;
  itemName: string;
  @Input() public submitCallback: () => void;

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>) { }

  ngOnInit() {
  }

  onOkClick(): void {
    this.submitCallback();
    this.dialogRef.close();
  }
}
