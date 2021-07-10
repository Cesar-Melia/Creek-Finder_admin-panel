import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments.component';
import { CreateCommentComponent } from './pages/create-comment/create-comment.component';
import { DeleteCommentComponent } from './pages/delete-comment/delete-comment.component';
import { UpdateCommentComponent } from './pages/update-comment/update-comment.component';

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
