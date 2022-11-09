import { CommentModel } from "./CommentModel";
import { PostCategory } from "./PostCategory";
import { PostTagModel } from "./PostTag";

export class PostModel{
    Id? : number ;
    IsPublished? : boolean;
    CreatedOn? : Date;
    LastModifiedOn?: Date
    PublishedOn? : Date;
    Title ?: string;
    Summary ?: string;
    PostContents !: string;
    PostHeaderImage ?: string;
    PostTags?: PostTagModel[];
    PostCategories ?: PostCategory[];
    Comments ?: CommentModel[];

}