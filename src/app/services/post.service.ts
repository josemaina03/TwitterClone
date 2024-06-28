import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private currentPostSubject = new BehaviorSubject<number>(1);
  currentPost = this.currentPostSubject.asObservable();

  constructor(private http: HttpClient) {}

  getPosts(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  setCurrentPost(postId: number): void {
    this.currentPostSubject.next(postId);
  }
}
