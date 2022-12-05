import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../module/post';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  likeS = new Subject()
  likeO = this.likeS.asObservable()

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=20').pipe(map(ris => ris))
  }

  delete(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
  }

}
