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
  filter: { creekName: string };

  constructor(private commentsService: CommentsService) {
    this.comments = [];
    this.filteredComments = [];
    this.filter = { creekName: '' };
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
      console.log('commentarrio', comment.creek.name);
      console.log('filter comment', this.filter.creekName);

      return comment.creek.name
        .toLowerCase()
        .includes(this.filter.creekName.toLowerCase());
    });
  }

  ngOnDestroy(): void {
    // this.commentsService.getComments().unSubscribe();
  }
}
