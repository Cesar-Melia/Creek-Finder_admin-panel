import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CreateCommentComponent } from './pages/create-comment/create-comment.component';
import { UpdateCommentComponent } from './pages/update-comment/update-comment.component';
import { DeleteCommentComponent } from './pages/delete-comment/delete-comment.component';
import { CommentsComponent } from './comments.component';

@NgModule({
  declarations: [
    CreateCommentComponent,
    UpdateCommentComponent,
    DeleteCommentComponent,
    CommentsComponent,
  ],
  imports: [CommonModule, CommentsRoutingModule],
})
export class CommentsModule {}
