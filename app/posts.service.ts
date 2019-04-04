import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  posts

  constructor(public http: HttpClient) {
    this.posts = []
  }

  getPosts() {
    this.http.get('http://localhost:8080/postbook/webapi/postbook/posts/all')
      .subscribe(res => this.posts = res)
  }

  addPost(newPost) {
    this.http.post('http://localhost:8080/postbook/webapi/postbook/posts/add', newPost)
      .subscribe(res => {
        this.posts.unshift(res)
      })
  }

}
