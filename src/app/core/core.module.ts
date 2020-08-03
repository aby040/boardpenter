import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent, ConfirmDeleteDialogComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    ConfirmDeleteDialogComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class CoreModule { }
