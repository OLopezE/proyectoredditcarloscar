import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostsComponent } from './posts/posts.component';
import { SearchComponent } from './search/search.component';
import { PostsService } from './services/posts.service'
import { SubsService } from './services/subs.service'
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: PostsComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    declarations: [
	AppComponent,
	PageNotFoundComponent,
	PostsComponent,
	SearchComponent
    ],
    imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes,{ enableTracing: true } ),
	BrowserAnimationsModule,
	HttpClientModule
    ],
    providers: [
	PostsService,
	SubsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
