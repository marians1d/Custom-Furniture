import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentListItemComponent } from './comment-list-item/comment-list-item.component';
import { CommentService } from './comment.service';



@NgModule({
  declarations: [
    CommentListComponent,
    CommentListItemComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CommentService
  ],
  exports: [
    CommentListComponent
  ]
})
export class CommentsModule { }
