namespace BlogProjectWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class mig6112022 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Categories", "CreatedOn", c => c.DateTime());
            AlterColumn("dbo.Categories", "LastModifiedOn", c => c.DateTime());
            AlterColumn("dbo.Categories", "PublishedOn", c => c.DateTime());
            AlterColumn("dbo.Comments", "CreatedOn", c => c.DateTime());
            AlterColumn("dbo.Comments", "LastModifiedOn", c => c.DateTime());
            AlterColumn("dbo.Comments", "PublishedOn", c => c.DateTime());
            AlterColumn("dbo.Posts", "CreatedOn", c => c.DateTime());
            AlterColumn("dbo.Posts", "LastModifiedOn", c => c.DateTime());
            AlterColumn("dbo.Posts", "PublishedOn", c => c.DateTime());
            AlterColumn("dbo.Tags", "CreatedOn", c => c.DateTime());
            AlterColumn("dbo.Tags", "LastModifiedOn", c => c.DateTime());
            AlterColumn("dbo.Tags", "PublishedOn", c => c.DateTime());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Tags", "PublishedOn", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Tags", "LastModifiedOn", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Tags", "CreatedOn", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Posts", "PublishedOn", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Posts", "LastModifiedOn", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Posts", "CreatedOn", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Comments", "PublishedOn", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Comments", "LastModifiedOn", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Comments", "CreatedOn", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Categories", "PublishedOn", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Categories", "LastModifiedOn", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Categories", "CreatedOn", c => c.DateTime(nullable: false));
        }
    }
}
