import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface IUser {
  id: number;
  name: String;
  username: String;
  email: String;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}
  getAllUsers(): Observable<IUser[]> {
    const users = this._http
      .get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      .pipe();
    return users;
  }
}
