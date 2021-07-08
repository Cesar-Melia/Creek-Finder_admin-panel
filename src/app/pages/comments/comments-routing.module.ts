import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { DeleteCommentComponent } from './delete-comment/delete-comment.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';

const routes: Routes = [
  { path: 'create-comment', component: CreateCommentComponent },
  { path: 'update-comment', component: UpdateCommentComponent },
  { path: 'delete-comment', component: DeleteCommentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsRoutingModule {}
