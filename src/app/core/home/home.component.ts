import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ItemsType, StateService } from '../services/state.service';
import { DownloaderUtil } from '../utils/donwloader';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'type', 'action'];
  dataSource: ItemsType[];

  constructor(public dialog: MatDialog, private router: Router, private state: StateService) { }

  ngOnInit(): void {
    this.dataSource = this.state.getItems();
  }

  editItem(id: number): void {
    this.router.navigate([`/builders/cupboard/${id}`]);
  }

  deleteItem(id: number): void {
    const confirmDeleteDialog = this.dialog.open(ConfirmDeleteDialogComponent);
    confirmDeleteDialog.afterClosed().subscribe(result => {
      if (result) {
        this.state.removeItem(id);
      }
    });
  }

  download(): void {
    const modules = [];
    this.dataSource.forEach((item: ItemsType) => {
      modules.push(item.data.measurements);
    });
    DownloaderUtil.buildSmart2dCsv(modules);
  }

}

@Component({
  template: `
    <h2 mat-dialog-title>Confirm</h2>
    <mat-dialog-content class="mat-typography">
      Are you sure you want to delete the item ?
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Confirm</button>
    </mat-dialog-actions>
  `,
})
export class ConfirmDeleteDialogComponent {}
