namespace BlogProjectWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class genel_duzenlemeler_23_10 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Categories", "Slug");
            DropColumn("dbo.Posts", "Slug");
            DropColumn("dbo.Tags", "Slug");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Tags", "Slug", c => c.String());
            AddColumn("dbo.Posts", "Slug", c => c.String(nullable: false));
            AddColumn("dbo.Categories", "Slug", c => c.String(nullable: false));
        }
    }
}
