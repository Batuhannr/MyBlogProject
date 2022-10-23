import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './Services/apiService';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './Components/main-nav/main-nav.component';
import { MaterialModule } from './material.module';
import { CategoryComponent } from './Components/category/category.component';
import { CommentComponent } from './Components/comment/comment.component';
import { PostCategoryComponent } from './Components/post-category/post-category.component';
import { PostComponent } from './Components/post/post.component';
import { PostTagComponent } from './Components/post-tag/post-tag.component';
import { TagComponent } from './Components/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CategoryComponent,
    CommentComponent,
    PostCategoryComponent,
    PostComponent,
    PostTagComponent,
    TagComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
