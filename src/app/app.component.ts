import { Component, OnInit } from '@angular/core';
import { SubsService } from './services/subs.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
		subs: Array<any>;
		constructor(private subsService: SubsService) { }

		ngOnInit() {
				this.subsService.all().subscribe((data: any) => this.subs = data.data.children.slice(1,5));
		}
}
