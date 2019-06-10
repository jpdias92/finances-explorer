import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { MovementsService } from '../../services/movements.service';
import { Movement } from '../../models/movement';
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
  displayedColumns: string[] = ['id', 'date', 'description', 'amount', 'category', 'observations'];
  dataSource: MatTableDataSource<Movement>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private movementsService: MovementsService,
    private notificationComponent: NotificationComponent
    ) {

    this.getMovementsData();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getMovementsData() {
    this.movementsService.getMovements().subscribe(
      (results: any) => {
        // on success
        console.log(results);
        this.dataSource = new MatTableDataSource(Movement.map(results));
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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