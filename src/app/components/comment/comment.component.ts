import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentService } from '../../services/comment.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: any[] = [];
  postId!: number;

  constructor(private commentService: CommentService, private postService: PostService) {}

  ngOnInit(): void {
    this.postService.currentPost.subscribe(postId => {
      this.postId = postId;
      this.commentService.getComments(postId).subscribe(comments => {
        this.comments = comments;
      });
    });
  }
}
