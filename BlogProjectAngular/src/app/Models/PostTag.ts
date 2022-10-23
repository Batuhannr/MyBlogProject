import { PostModel } from "./PostModel";
import { TagModel } from "./TagModel";

export class PostTagModel{

    Id ?: number;
    PostId ?: number;
    Post ?: PostModel;
    TagId ?: number;
    Tag ?: TagModel;
}

