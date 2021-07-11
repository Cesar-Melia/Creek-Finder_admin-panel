import { Component, OnInit } from '@angular/core';
import { CommentsService } from './services/comments.service';
import { Comment } from './models/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [CommentsService],
})
export class CommentsComponent implements OnInit {
  comments: Comment[];
  filteredComments: Comment[];
  filter: {
    creekName: string;
    userName: string;
    userEmail: string;
    commentId: string;
  };

  constructor(private commentsService: CommentsService) {
    this.comments = [];
    this.filteredComments = [];
    this.filter = { creekName: '', userName: '', userEmail: '', commentId: '' };
  }

  ngOnInit(): void {
    this.commentsService.getComments().subscribe((commentsData: any) => {
      console.log('Resultado API: ', commentsData);

      this.comments = commentsData;
      this.filteredComments = commentsData;
    });
  }

  filterComment(): void {
    this.filteredComments = this.comments;

    this.filteredComments = this.filteredComments.filter((comment) => {
      console.log('Comment Id', comment._id);
      return (
        comment.creek.name
          .toLowerCase()
          .includes(this.filter.creekName.toLowerCase()) &&
        comment.user.userName
          .toLowerCase()
          .includes(this.filter.userName.toLowerCase()) &&
        comment.user.email
          .toLowerCase()
          .includes(this.filter.userEmail.toLowerCase()) &&
        comment._id?.toLowerCase().includes(this.filter.commentId)
      );
    });
  }

  delete(event: any): void {
    if (confirm('Estas seguro de querer borrar esta Cala:')) {
      console.log('Implement delete functionality here');
    }
  }

  reset(event: any): void {
    event.preventDefault();

    event.target.form.creekName.value = '';
    event.target.form.userName.value = '';
    event.target.form.userEmail.value = '';
    event.target.form.commentId.value = '';

    this.filteredComments = this.comments;
  }
}
