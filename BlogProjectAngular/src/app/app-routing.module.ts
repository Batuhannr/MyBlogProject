import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './Components/add-post/add-post.component';
import { AdminComponent } from './Components/admin/admin.component';
import { CategoryComponent } from './Components/category/category.component';
import { PostPriviewComponentComponent } from './Components/post-priview-component/post-priview-component.component';
import { PostComponent } from './Components/post/post.component';
import { TagComponent } from './Components/tag/tag.component';
import { HomePageComponent } from './Components/UserInterface/home-page/home-page.component';
import { ReadPostComponent } from './Components/UserInterface/read-post/read-post.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "admin", component: AdminComponent},
  {path: "admin/Category", component: CategoryComponent },
  {path: "admin/Tag", component: TagComponent},
  {path: "admin/Post", component: PostComponent},
  {path: "admin/addPost", component: AddPostComponent},
  {path: "admin/post/get/postprew", component: PostPriviewComponentComponent},
  {path: "readpost" , component: ReadPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
