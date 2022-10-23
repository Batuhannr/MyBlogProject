import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './Components/category/category.component';
import { PostComponent } from './Components/post/post.component';
import { TagComponent } from './Components/tag/tag.component';

const routes: Routes = [
  {path: "Category", component: CategoryComponent},
  {path: "Tag", component: TagComponent},
  {path: "Post", component: PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
