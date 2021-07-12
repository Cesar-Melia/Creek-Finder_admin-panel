import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments.component';
import { DeleteCommentComponent } from './pages/delete-comment/delete-comment.component';

const routes: Routes = [
  { path: '', component: CommentsComponent },
  { path: 'delete-comment', component: DeleteCommentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsRoutingModule {}
