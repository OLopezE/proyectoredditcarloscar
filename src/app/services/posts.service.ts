import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {

		constructor(private http: HttpClient) {}

		all(){
				return this.http.get("https://www.reddit.com/.json");
		}
}
