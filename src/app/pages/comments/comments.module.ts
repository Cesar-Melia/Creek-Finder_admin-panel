import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CommentsRoutingModule } from './comments-routing.module';

import { DeleteCommentComponent } from './pages/delete-comment/delete-comment.component';
import { CommentsComponent } from './comments.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DeleteCommentComponent, CommentsComponent],
  imports: [CommonModule, CommentsRoutingModule, HttpClientModule, FormsModule],
})
export class CommentsModule {}
