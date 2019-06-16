import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { zip } from "rxjs";

import { MovementsService } from '../../services/movements.service';
import { CategoriesService } from '../../services/categories.service';
import { Movement } from '../../models/movement';
import { Category } from '../../models/category';
import { NotificationComponent } from '../../../../shared/notification/notification.component';
import { MovementsInsertComponent } from '../movements-insert/movements-insert.component'
import { ConfirmComponent } from '../../../../shared/confirm/confirm.component';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-movements-list',
  styleUrls: ['movements-list.component.scss'],
  templateUrl: 'movements-list.component.html',
})
export class MovementsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'description', 'amount', 'category', 'observations', 'actions'];
  dataSource: MatTableDataSource<Movement>;
  categories: Category[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private movementsService: MovementsService,
    private categoriesService: CategoriesService,
    private notificationComponent: NotificationComponent,
    private dialog: MatDialog,
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
    zip(this.movementsService.getMovements(), this.categoriesService.getCategories()).subscribe(
      ([movements, categories]) => {
        // on success
        console.log(movements);
        console.log(categories);
        this.categories = Category.map(categories);
        this.dataSource = new MatTableDataSource(Movement.map(movements, this.categories));
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

  movementsToggle(movementId: string) {
    this.movementToggled.emit(movementId);
  }

  openInsertDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      categories: this.categories
    };


    const dialogRef = this.dialog.open(MovementsInsertComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.submitInsert(data)
    );
  }

  submitInsert(data: any) {
    if (data) {
      this.movementsService.postMovement(data).subscribe(
        (results: any) => {
          this.getMovementsData();
        },
        (err: any) => {
          // on error
          console.log(err);
          this.notificationComponent.showNotification(`Erro ao inserir movimento: ${err.error}`, 4000);
        });
    }
  }

  openEditDialog(row: Movement) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: row.id,
      description: row.description,
      category: row.category,
      amount: row.amount,
      movement_date: row.date,
      comment: row.observations,
      categories: this.categories
    };

    const dialogRef = this.dialog.open(MovementsInsertComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.submitEdit(data)
    );
  }

  submitEdit(data: any) {
    if (data) {
      this.movementsService.postMovement(data).subscribe(
        (results: any) => {
          this.getMovementsData();
        },
        (err: any) => {
          // on error
          console.log(err);
          this.notificationComponent.showNotification(`Erro ao inserir movimento: ${err.error}`, 4000);
        });
    }
  }

  openConfirmDialog(row: Movement, action: string) {
    const dialogRef = this.dialog.open(ConfirmComponent, { width: '30%', height: '30%' });
    dialogRef.componentInstance.action = action;
    dialogRef.componentInstance.itemName = `o movimento "${row.description}"`;
    dialogRef.componentInstance.submitCallback = () => this.submitDelete(row);
  }

  submitDelete(row: Movement) {
    this.movementsService.deleteMovement(row).subscribe(
      (results: any) => {
        // on sucesss
        console.log(results);
        this.getMovementsData();
      },
      (err: any) => {
        // on error
        console.log(err);
        this.notificationComponent.showNotification(`Error deleting guideline: ${err.error}`, 4000);
      });
  }

}