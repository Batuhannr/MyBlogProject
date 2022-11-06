using BlogProjectWebApi.Context;
using BlogProjectWebApi.IRepository;
using BlogProjectWebApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Repository
{
    public class PostRepository : BaseRepository<Post>
    {
        private readonly BlogDbContext _context;
        public PostRepository(BlogDbContext context) : base(context)
        {
            _context = context;
        }
        //private BlogDbContext _context = new BlogDbContext();
        //public ResultClass Add(Post item)
        //{
        //    item.CreatedOn = DateTime.Now;
        //    item.LastModifiedOn = DateTime.Now;
        //    item.PublishedOn = DateTime.Now;
        //    _context.Posts.Add(item);
        //    int resultBool = _context.SaveChanges();

        //    ResultClass result = new ResultClass();
        //    if (resultBool >= 1)
        //    {
        //        result.Result = true;
        //        result.ResultMessages = new List<string>()
        //        {
        //            "Post Added"
        //        };
        //        result.ResultObject = item;
        //        return result;
        //    }
        //    else
        //    {
        //        result.Result = false;
        //        result.ResultMessages = new List<string>()
        //        {
        //            "Error"
        //        };
        //        result.ResultObject = item;
        //        return result;
        //    }

        //}
        //public ResultClass Delete(int id)
        //{
        //    _context.Posts.Remove(_context.Posts.FirstOrDefault(e => e.Id == id));
        //    Post item = Get(id);
        //    int resultBool = _context.SaveChanges();
        //    ResultClass result = new ResultClass();
        //    if (resultBool == 1)
        //    {
        //        result.Result = true;
        //        result.ResultMessages = new List<string>()
        //        {
        //            "Post Updated"
        //        };
        //        result.ResultObject = item;
        //        return result;
        //    }
        //    else
        //    {
        //        result.Result = false;
        //        result.ResultMessages = new List<string>()
        //        {
        //            "Error"
        //        };
        //        result.ResultObject = item;
        //        return result;
        //    }
        //}
        //public Post Get(int id)
        //{
        //    return _context.Posts.FirstOrDefault(e => e.Id == id);
        //}
        //public List<Post> List()
        //{
        //    return _context.Posts.ToList();
        //}
        //public ResultClass Update(Post item, int id)
        //{
        //    Post post = _context.Posts.Find(id);
        //    post.Title = item.Title;
        //    post.Summary = item.Summary;
        //    post.PostContents = item.PostContents;
        //    post.PostTags = item.PostTags;
        //    post.PostCategories = item.PostCategories;
        //    post.Comments = item.Comments;
        //    post.LastModifiedOn = DateTime.Now;
        //    int resultBool = _context.SaveChanges();
        //    ResultClass result = new ResultClass();
        //    if (resultBool == 1)
        //    {
        //        result.Result = true;
        //        result.ResultMessages = new List<string>()
        //        {
        //            "Post Updated"
        //        };
        //        result.ResultObject = item;
        //        return result;
        //    }
        //    else
        //    {
        //        result.Result = false;
        //        result.ResultMessages = new List<string>()
        //        {
        //            "Error"
        //        };
        //        result.ResultObject = item;
        //        return result;
        //    }
        //}
    }
}