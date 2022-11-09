namespace BlogProjectWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class postHeaderImageAdd : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Posts", "PostHeaderImage", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Posts", "PostHeaderImage");
        }
    }
}
