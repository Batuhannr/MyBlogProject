namespace BlogProjectWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class postId_and_postReadingCount : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Comments", "ParentPost_Id", "dbo.Posts");
            DropIndex("dbo.Comments", new[] { "ParentPost_Id" });
            RenameColumn(table: "dbo.Comments", name: "ParentPost_Id", newName: "PostId");
            AddColumn("dbo.Posts", "ReadingCount", c => c.Int());
            AlterColumn("dbo.Comments", "PostId", c => c.Int(nullable: false));
            CreateIndex("dbo.Comments", "PostId");
            AddForeignKey("dbo.Comments", "PostId", "dbo.Posts", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Comments", "PostId", "dbo.Posts");
            DropIndex("dbo.Comments", new[] { "PostId" });
            AlterColumn("dbo.Comments", "PostId", c => c.Int());
            DropColumn("dbo.Posts", "ReadingCount");
            RenameColumn(table: "dbo.Comments", name: "PostId", newName: "ParentPost_Id");
            CreateIndex("dbo.Comments", "ParentPost_Id");
            AddForeignKey("dbo.Comments", "ParentPost_Id", "dbo.Posts", "Id");
        }
    }
}
