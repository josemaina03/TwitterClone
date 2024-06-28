import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[] = [];
  userName: string = '';

  constructor(public postService: PostService, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.userName = user.name;
      this.postService.getPosts(user.id).subscribe(posts => {
        this.posts = posts;
      });
    }); 
  }
}
