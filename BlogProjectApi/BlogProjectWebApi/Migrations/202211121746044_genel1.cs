namespace BlogProjectWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class genel1 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Categories", "IsPublished", c => c.Boolean());
            AlterColumn("dbo.Comments", "IsPublished", c => c.Boolean());
            AlterColumn("dbo.Posts", "IsPublished", c => c.Boolean());
            AlterColumn("dbo.Tags", "IsPublished", c => c.Boolean());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Tags", "IsPublished", c => c.Boolean(nullable: false));
            AlterColumn("dbo.Posts", "IsPublished", c => c.Boolean(nullable: false));
            AlterColumn("dbo.Comments", "IsPublished", c => c.Boolean(nullable: false));
            AlterColumn("dbo.Categories", "IsPublished", c => c.Boolean(nullable: false));
        }
    }
}
