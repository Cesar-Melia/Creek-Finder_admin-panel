import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { DeleteCommentComponent } from './components/delete-comment/delete-comment.component';
import { UpdateCommentComponent } from './components/update-comment/update-comment.component';

const routes: Routes = [
  { path: '', component: CommentsComponent },
  { path: 'create-comment', component: CreateCommentComponent },
  { path: 'update-comment', component: UpdateCommentComponent },
  { path: 'delete-comment', component: DeleteCommentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsRoutingModule {}
