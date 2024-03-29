﻿namespace BlogProjectWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class parentId : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Comments", name: "Parent_Id", newName: "ParentId");
            RenameIndex(table: "dbo.Comments", name: "IX_Parent_Id", newName: "IX_ParentId");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Comments", name: "IX_ParentId", newName: "IX_Parent_Id");
            RenameColumn(table: "dbo.Comments", name: "ParentId", newName: "Parent_Id");
        }
    }
}
