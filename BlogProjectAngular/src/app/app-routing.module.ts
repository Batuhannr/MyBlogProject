import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './Components/add-post/add-post.component';
import { AdminComponent } from './Components/admin/admin.component';
import { CategoryComponent } from './Components/category/category.component';
import { PostPriviewComponentComponent } from './Components/post-priview-component/post-priview-component.component';
import { PostComponent } from './Components/post/post.component';
import { TagComponent } from './Components/tag/tag.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReadPostComponent } from './pages/read-post/read-post.component';
import { AuthGuard } from './guards/auth.guard';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: "", component: AboutUsComponent },
  {
    path: "admin", component: AdminComponent,
    children: [
      { path: "Category", component: CategoryComponent },
      { path: "Tag", component: TagComponent },
      { path: "Post", component: PostComponent },
      { path: "addPost", component: AddPostComponent },
      { path: "post/get/postprew", component: PostPriviewComponentComponent },
    ],
     canActivate: [AuthGuard]
  },

  { path: "readpost/:id", component: ReadPostComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
