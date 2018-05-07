import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postsService: PostsService) { }
		posts: Array<any>;
		currentPost: any = null;
		
		ngOnInit() {
				this.postsService.all().subscribe((data: any) => this.posts = data.data.children);
		}

		show(post){
				this.currentPost = post;
		}

}
