import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments: any[] = [];
  post: any = {};

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.getPost();
    this.getpostComments();
  }

  getPost() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getSinglePost(id).subscribe((post) => {
      this.post = post;
    });
  }

  getpostComments() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getComments(id).subscribe((comments) => {
      this.comments = comments;
    });
  }
}
