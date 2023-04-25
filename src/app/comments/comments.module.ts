import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from './components/comment/comment.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsService } from './services/comments.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommentsDashComponent } from './components/comments-dash/comments-dash.component';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule,MatInputModule ],
  declarations: [CommentsComponent, CommentComponent, CommentFormComponent, CommentsDashComponent],
  providers: [CommentsService],
  exports: [CommentsComponent],
})
export class CommentsModule {}
