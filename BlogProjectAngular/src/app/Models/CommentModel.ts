import { PostModel } from "./PostModel";

export class CommentModel{
    Id? : number ;
    IsPublished? : boolean;
    CreatedOn? : Date;
    LastModifiedOn?: Date
    PublishedOn? : Date;
    CommentContents ?: string;
    PostedBy ?: string;
    Parent?: CommentModel;
    ParentPost ?: PostModel;
}