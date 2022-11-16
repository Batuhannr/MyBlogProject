using BlogProjectWebApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Context
{
    public class BlogDbContext:DbContext
    {
        public BlogDbContext(): base("name=BlogContext")
        {

        }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<PostCategory> postCategories { get; set; }
        public DbSet<PostTag> postTags { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Users> Users { get; set; }
        public DbSet<EmailModel> Emails { get; set; }


        //public override int SaveChanges()
        //{
        //    var degler = this.ChangeTracker.Entries().Where(s => s.State == EntityState.Added || s.State == EntityState.Modified).ToList();

        //    foreach (var deg in degler)
        //    {
        //        var dddd = deg.Entity.GetType().GetProperty("LastModifiedOn");
        //        if (dddd != null)
        //        {
        //            BaseEntity model = (BaseEntity)deg.Entity;
        //            model.LastModifiedOn = DateTime.Now;
        //        }
        //    }


        //    return base.SaveChanges();  
        //}

    }
}