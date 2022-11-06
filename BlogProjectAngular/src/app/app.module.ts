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
import { EditorModule } from '@tinymce/tinymce-angular';
import { PostDialogComponent } from './Components/Dialogs/post-dialog/post-dialog.component';
import { AddPostComponent } from './Components/add-post/add-post.component';
import { FormsModule } from '@angular/forms';

import { CKEditorModule } from 'ng2-ckeditor';
import { PostPriviewComponentComponent } from './Components/post-priview-component/post-priview-component.component';
import { HomePageComponent } from './Components/UserInterface/home-page/home-page.component';
import { AdminComponent } from './Components/admin/admin.component';
import { MainNavUserInterfaceComponent } from './Components/UserInterface/main-nav-user-interface/main-nav-user-interface.component';
import { FooterComponent } from './Components/UserInterface/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CategoryComponent,
    CommentComponent,
    PostComponent,
    TagComponent,
    AddPostComponent,
    PostPriviewComponentComponent,
    HomePageComponent,
    AdminComponent,
    MainNavUserInterfaceComponent,
    FooterComponent,
    
    



    //Dialogs 
    CategoryDialogComponent,
    MyAlerDialogComponent,
    ConfirmDialogComponent,
    TagDialogComponent,
    PostDialogComponent

  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EditorModule,
    FormsModule,
    CKEditorModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
