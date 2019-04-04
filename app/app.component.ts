import { PostsService } from './posts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newPost

  constructor(public postsService: PostsService) {
    this.newPost = {
      title: '',
      body: '',
      id: 0
    }
    this.postsService.getPosts()
  }

  addPost(postForm) {
    this.postsService.addPost(this.newPost)
    this.newPost = {
      title: '',
      body: '',
      id: 0
    }
    postForm.form.markAsPristine()
  }

}