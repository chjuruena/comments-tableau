import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentsModule } from '../comments/comments.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';

import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({

  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommentsModule,
    MatToolbarModule,
    MatGridListModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
