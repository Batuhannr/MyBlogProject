import { CategoryModel } from "./CategoryModel";
import { PostModel } from "./PostModel";

export class PostCategory{
    Id ?:  number;
    PostId ?: number;
    Post ?: PostModel;
    CategoryId ?: number;
    Category ?: CategoryModel;
}