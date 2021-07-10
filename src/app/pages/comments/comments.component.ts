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

  constructor(private commentsService: CommentsService) {
    this.comments = [];
  }

  ngOnInit(): void {
    this.commentsService.getComments().subscribe((commentsData: any) => {
      console.log('Resultado petición API: ', commentsData);

      this.comments = commentsData;
    });
  }

  ngOnDestroy(): void {
    // this.commentsService.getComments().unSubscribe();
  }
}
