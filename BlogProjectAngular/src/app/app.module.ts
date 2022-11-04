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
import { PostComponent } from './Components/post/post.component';
import { TagComponent } from './Components/tag/tag.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryDialogComponent } from './Components/Dialogs/category-dialog/category-dialog.component';
import { MyAlerDialogComponent } from './Components/Dialogs/my-aler-dialog/my-aler-dialog.component';
import { ConfirmDialogComponent } from './Components/Dialogs/confirm-dialog/confirm-dialog.component';
import { TagDialogComponent } from './Components/Dialogs/tag-dialog/tag-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CategoryComponent,
    CommentComponent,
    PostComponent,
    TagComponent,



    //Dialogs 
    CategoryDialogComponent,
    MyAlerDialogComponent,
    ConfirmDialogComponent,
    TagDialogComponent

  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
