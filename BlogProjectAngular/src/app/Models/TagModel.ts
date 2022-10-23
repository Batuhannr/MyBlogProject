import { PostTagModel } from "./PostTag";

export class TagModel{
    Id? : number ;
    IsPublished? : boolean;
    CreatedOn? : Date;
    LastModifiedOn?: Date
    PublishedOn? : Date;
    Title ?: string;
    Description ?: string;
    PostTags?: PostTagModel;
}