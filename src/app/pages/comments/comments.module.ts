import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';
import { DeleteCommentComponent } from './delete-comment/delete-comment.component';


@NgModule({
  declarations: [
    CreateCommentComponent,
    UpdateCommentComponent,
    DeleteCommentComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ]
})
export class CommentsModule { }
