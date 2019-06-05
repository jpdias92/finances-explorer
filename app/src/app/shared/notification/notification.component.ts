import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  constructor(public snackBar: MatSnackBar) { }

  showNotification(message: string, duration: number) {
    this.snackBar.open(message, null, {
      duration: duration
    });
  }

  showActionNotification(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, {
      duration: duration
    });
  }
}
