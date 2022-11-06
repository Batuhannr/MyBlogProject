using BlogProjectWebApi.Context;
using BlogProjectWebApi.IRepository;
using BlogProjectWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Repository
{
    public class PostCategoryRepository : BaseRepository<PostCategory>
    {
        private readonly BlogDbContext _context;
        public PostCategoryRepository(BlogDbContext context) : base(context)
        {
            _context = context;
        }

        //private BlogDbContext _context = new BlogDbContext();

        //public ResultClass Add(PostCategory item)
        //{
        //    _context.postCategories.Add(item);
        //    int resultBool = _context.SaveChanges();
        //    ResultClass result = new ResultClass();
        //    if (resultBool == 1)
        //    {
        //        result.Result = true;
        //        result.ResultMessages = new List<string>()
        //        {
        //            "PostCategory Added"
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
        //    _context.postCategories.Remove(_context.postCategories.FirstOrDefault(e => e.Id == id));
        //    PostCategory item = _context.postCategories.FirstOrDefault(e => e.Id == id);
        //    int resultBool = _context.SaveChanges();
        //    ResultClass result = new ResultClass();
        //    if (resultBool == 1)
        //    {
        //        result.Result = true;
        //        result.ResultMessages = new List<string>()
        //        {
        //            "PostCategory Deleted"
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

        //public PostCategory Get(int id)
        //{
        //    return _context.postCategories.FirstOrDefault(e => e.Id == id);
        //}

        public List<PostCategory> GetPostCategory(int postId)
        {
            return _context.postCategories.Where(e => e.Id == postId).ToList();
        }

        //public List<PostCategory> List()
        //{
        //    return _context.postCategories.ToList();
        //}

        //public ResultClass Update(PostCategory item, int id)
        //{
        //    PostCategory postCategory = _context.postCategories.Find(id);
        //    postCategory.PostId = item.PostId;
        //    postCategory.CategoryId = item.CategoryId;
        //    int resultBool = _context.SaveChanges();
        //    ResultClass result = new ResultClass();
        //    if (resultBool == 1)
        //    {
        //        result.Result = true;
        //        result.ResultMessages = new List<string>()
        //        {
        //            "PostCategory Updated"
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