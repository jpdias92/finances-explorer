import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface MovementsData {
  id: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  observations: string;
}

/** Constants used to fill up our data base. */
const CATEGORY: string[] = ['Roupa', 'Condomínio', 'Almoços', 'Jantares', 'Livros', 'Supermercado', 'Poupanças',
  'Comboio', 'Telecomunicações', 'Gasóleo', 'Gás', 'Eletricidade', 'Água'];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-movements',
  styleUrls: ['movements.component.css'],
  templateUrl: 'movements.component.html',
})
export class MovementsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'description', 'amount', 'category', 'observations'];
  dataSource: MatTableDataSource<MovementsData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 movements
    const movements = Array.from({length: 100}, (_, k) => createNewMovement(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(movements);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())) ;
}

/** Builds and returns a new Movement. */
function createNewMovement(id: number): MovementsData {
  return {
    id: id.toString(),
    date: randomDate(new Date(2019, 0, 1), new Date(2019, 4, 1)),
    description: '',
    amount: Math.round(Math.random() * -10000) / 100,
    category: CATEGORY[Math.round(Math.random() * (CATEGORY.length - 1))],
    observations: ''
  };
}







/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */