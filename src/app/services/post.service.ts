import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface IPost {
  id: number;
  title: String;
  body: String;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private _http: HttpClient) {}
  getAllPosts(): Observable<IPost[]> {
    const posts = this._http
      .get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        catchError((err) => {
          throw Error('عنك ايرور -- لو سمحت شوف ال URL');
        })
      );
    return posts;
  }

  getSinglePost(id: number): Observable<IPost[]> {
    const post = this._http
      .get<IPost[]>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(
        catchError((err) => {
          throw Error('عنك ايرور -- لو سمحت شوف ال URL');
        })
      );
    return post;
  }
  getComments(postId: number): Observable<IPost[]> {
    const comments = this._http
      .get<IPost[]>(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      )
      .pipe(
        catchError((err) => {
          throw Error('عنك ايرور -- لو سمحت شوف ال URL');
        })
      );
    return comments;
  }
}
