namespace BlogProjectWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class genel : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Posts", "Title", c => c.String());
            AlterColumn("dbo.Posts", "Summary", c => c.String());
            AlterColumn("dbo.Posts", "PostContents", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Posts", "PostContents", c => c.String(nullable: false));
            AlterColumn("dbo.Posts", "Summary", c => c.String(nullable: false));
            AlterColumn("dbo.Posts", "Title", c => c.String(nullable: false));
        }
    }
}
