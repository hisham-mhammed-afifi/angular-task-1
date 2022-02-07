import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostService } from '../services/post.service';

interface IPost {
  id: number;
  title: String;
  body: String;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];
  postId: any = '';

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts) => {
      this.posts = posts;
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('id'));

      this.postId = params.get('id');
    });
  }

  gotoPost() {
    console.log(this.postId);

    this.router.navigate(['posts', this.postId]);
  }
}
