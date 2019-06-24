import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogConfig } from "@angular/material";

import { MembersService } from '../../services/members.service';
import { Member } from '../../models/member';
import { NotificationComponent } from '../../../../shared/notification/notification.component';
import { MembersInsertComponent } from '../members-insert/members-insert.component'
import { ConfirmComponent } from '../../../../shared/confirm/confirm.component';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-members-list',
  styleUrls: ['members-list.component.scss'],
  templateUrl: 'members-list.component.html',
})
export class MembersListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'name', 'gender', 'nationality', 'birth_date', 'death_date', 'address',
  'contact1', 'contact2', 'email', 'baptism_date', 'communion_date', 'confirmation_date', 'marital_status',
  'partner_id', 'occupation', 'professional_qualifications', 'father_id', 'mother_id', 'actions'];
  dataSource: MatTableDataSource<Member>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private membersService: MembersService,
    private notificationComponent: NotificationComponent,
    private dialog: MatDialog,
  ) {

    this.getMembersData();
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

  getMembersData() {
    this.membersService.getMembers().subscribe(
      (members: any) => {
        // on success
        console.log(members);
        this.dataSource = new MatTableDataSource(Member.map(members));
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
      },
      (err: any) => {
        // on error
        console.log(err);
        this.notificationComponent.showNotification(`Error requesting members data: ${err.error}`, 4000);
      });
  }

  @Output() movementToggled: EventEmitter<string> = new EventEmitter();

  membersToggle(memberId: string) {
    this.movementToggled.emit(memberId);
  }

  openInsertDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: "Inserir Membro",
      action: "INSERIR"
    };


    const dialogRef = this.dialog.open(MembersInsertComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.submitInsert(data)
    );
  }

  submitInsert(data: any) {
    if (data) {
      this.membersService.postMember(data).subscribe(
        (results: any) => {
          this.getMembersData();
        },
        (err: any) => {
          // on error
          console.log(err);
          this.notificationComponent.showNotification(`Erro ao inserir membro: ${err.error}`, 4000);
        });
    }
  }

  openEditDialog(row: Member) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '40%';
    dialogConfig.height = '60%';

    dialogConfig.data = {
      title: "Editar Membro",
      action: "MODIFICAR",

      id: row.id,
      member: row,
    };

    const dialogRef = this.dialog.open(MembersInsertComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.submitEdit(row.id, data)
    );
  }

  submitEdit(member_id: string, data: any) {
    if (data) {
      this.membersService.putMember(member_id, data).subscribe(
        (results: any) => {
          this.getMembersData();
        },
        (err: any) => {
          // on error
          console.log(err);
          this.notificationComponent.showNotification(`Erro ao editar membro: ${err.error}`, 4000);
        });
    }
  }

  openConfirmDialog(row: Member, action: string) {
    const dialogRef = this.dialog.open(ConfirmComponent, { width: '30%', height: '30%' });
    dialogRef.componentInstance.action = action;
    dialogRef.componentInstance.itemName = `o membro "${row.name}"`;
    dialogRef.componentInstance.submitCallback = () => this.submitDelete(row);
  }

  submitDelete(row: Member) {
    this.membersService.deleteMember(row).subscribe(
      (results: any) => {
        // on sucesss
        console.log(results);
        this.getMembersData();
      },
      (err: any) => {
        // on error
        console.log(err);
        this.notificationComponent.showNotification(`Erro ao apagar membro: ${err.error}`, 4000);
      });
  }

}