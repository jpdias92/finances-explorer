import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { MovementsListDataSource } from './movements-list-datasource';
import { MovementsService } from '../../services/movements.service';
import { NotificationComponent } from '../../../../shared/notification/notification.component';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-movements-list',
  styleUrls: ['movements-list.component.css'],
  templateUrl: 'movements-list.component.html',
})
export class MovementsListComponent implements OnInit {

  dataSource: MovementsListDataSource;

  displayedColumns: string[] = ['id', 'date', 'description', 'amount', 'category', 'observations'];

  constructor(
    private movementsService: MovementsService,
    private notificationComponent: NotificationComponent
    ) {

    this.getMovementsData();

  };

  ngOnInit() { }

  getMovementsData() {
    this.movementsService.getMovements().subscribe(
      (results: any) => {
        // on success
        console.log(results);
        this.dataSource = new MovementsListDataSource(results);
        console.log(this.dataSource);
      },
      (err: any) => {
        // on error
        console.log(err);
        this.notificationComponent.showNotification(`Error requesting movements data: ${err.error}`, 4000);
      });
  }

  @Output() movementToggled: EventEmitter<string> = new EventEmitter();

  movementsToggle(movementId: string){
    this.movementToggled.emit(movementId);
  }

}