import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentsModule } from '../comments/comments.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { TableComponent } from './table/table.component';

@NgModule({

  declarations: [TableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommentsModule,
    MatToolbarModule,
    MatGridListModule
  ],
  exports: [TableComponent]
})
export class DashboardModule { }
