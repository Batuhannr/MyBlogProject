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
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminComponent } from './Components/admin/admin.component';
import { MainNavUserInterfaceComponent } from './Components/main-nav-user-interface/main-nav-user-interface.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ReadPostComponent } from './pages/read-post/read-post.component';
import { LastfivepostComponent } from './Components/lastfivepost/lastfivepost.component';
import { MarketingCardComponent } from './Components/marketing-card/marketing-card.component';
import { RecommendpostComponent } from './Components/recommendpost/recommendpost.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ImageUploadComponent } from './Components/image-upload/image-upload.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './pages/login/login.component';
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
    ReadPostComponent,
    LastfivepostComponent,
    RecommendpostComponent,
    AboutUsComponent,
    ImageUploadComponent,
    LoginComponent,
    

    


    //Dialogs 
    CategoryDialogComponent,
    MyAlerDialogComponent,
    ConfirmDialogComponent,
    TagDialogComponent,
    PostDialogComponent,
    MarketingCardComponent

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
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
