namespace BlogProjectWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class first_migration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false),
                        Description = c.String(nullable: false),
                        Slug = c.String(nullable: false),
                        IsPublished = c.Boolean(nullable: false),
                        CreatedOn = c.DateTime(nullable: false),
                        LastModifiedOn = c.DateTime(nullable: false),
                        PublishedOn = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Posts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false),
                        Slug = c.String(nullable: false),
                        Summary = c.String(nullable: false),
                        PostContents = c.String(nullable: false),
                        IsPublished = c.Boolean(nullable: false),
                        CreatedOn = c.DateTime(nullable: false),
                        LastModifiedOn = c.DateTime(nullable: false),
                        PublishedOn = c.DateTime(nullable: false),
                        Category_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Categories", t => t.Category_Id)
                .Index(t => t.Category_Id);
            
            CreateTable(
                "dbo.Comments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CommentContents = c.String(nullable: false),
                        PostedBy = c.String(nullable: false),
                        IsPublished = c.Boolean(nullable: false),
                        CreatedOn = c.DateTime(nullable: false),
                        LastModifiedOn = c.DateTime(nullable: false),
                        PublishedOn = c.DateTime(nullable: false),
                        Parent_Id = c.Int(),
                        ParentPost_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Comments", t => t.Parent_Id)
                .ForeignKey("dbo.Posts", t => t.ParentPost_Id)
                .Index(t => t.Parent_Id)
                .Index(t => t.ParentPost_Id);
            
            CreateTable(
                "dbo.PostCategories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        PostId = c.Int(nullable: false),
                        CategoryId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Categories", t => t.CategoryId, cascadeDelete: true)
                .ForeignKey("dbo.Posts", t => t.PostId, cascadeDelete: true)
                .Index(t => t.PostId)
                .Index(t => t.CategoryId);
            
            CreateTable(
                "dbo.PostTags",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        PostId = c.Int(nullable: false),
                        TagId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Posts", t => t.PostId, cascadeDelete: true)
                .ForeignKey("dbo.Tags", t => t.TagId, cascadeDelete: true)
                .Index(t => t.PostId)
                .Index(t => t.TagId);
            
            CreateTable(
                "dbo.Tags",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false),
                        Description = c.String(nullable: false),
                        Slug = c.String(),
                        IsPublished = c.Boolean(nullable: false),
                        CreatedOn = c.DateTime(nullable: false),
                        LastModifiedOn = c.DateTime(nullable: false),
                        PublishedOn = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Posts", "Category_Id", "dbo.Categories");
            DropForeignKey("dbo.PostTags", "TagId", "dbo.Tags");
            DropForeignKey("dbo.PostTags", "PostId", "dbo.Posts");
            DropForeignKey("dbo.PostCategories", "PostId", "dbo.Posts");
            DropForeignKey("dbo.PostCategories", "CategoryId", "dbo.Categories");
            DropForeignKey("dbo.Comments", "ParentPost_Id", "dbo.Posts");
            DropForeignKey("dbo.Comments", "Parent_Id", "dbo.Comments");
            DropIndex("dbo.PostTags", new[] { "TagId" });
            DropIndex("dbo.PostTags", new[] { "PostId" });
            DropIndex("dbo.PostCategories", new[] { "CategoryId" });
            DropIndex("dbo.PostCategories", new[] { "PostId" });
            DropIndex("dbo.Comments", new[] { "ParentPost_Id" });
            DropIndex("dbo.Comments", new[] { "Parent_Id" });
            DropIndex("dbo.Posts", new[] { "Category_Id" });
            DropTable("dbo.Tags");
            DropTable("dbo.PostTags");
            DropTable("dbo.PostCategories");
            DropTable("dbo.Comments");
            DropTable("dbo.Posts");
            DropTable("dbo.Categories");
        }
    }
}
