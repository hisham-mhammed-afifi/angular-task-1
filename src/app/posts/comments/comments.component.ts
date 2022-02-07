import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments: any[] = [];
  post: any = {};
  postId: number = 3;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      console.log(params.get('id'));

      this.postId = parseInt(params.get('id'));
    });
    this.getPost();
    this.getpostComments();
    this.route.paramMap.subscribe((params) => {
      params.get('id');
    });
  }

  getPost() {
    this.postService.getSinglePost(this.postId).subscribe((post) => {
      this.post = post;
    });
  }

  getpostComments() {
    this.postService.getComments(this.postId).subscribe((comments) => {
      this.comments = comments;
    });
  }

  goBack(id: number) {
    this.router.navigate(['/posts', { id }]);
  }
}
