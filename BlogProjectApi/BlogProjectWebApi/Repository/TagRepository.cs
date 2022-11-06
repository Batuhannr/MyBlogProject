using BlogProjectWebApi.Context;
using BlogProjectWebApi.IRepository;
using BlogProjectWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Repository
{
    public class TagRepository : BaseRepository<Tag>
    {
        private readonly BlogDbContext _context;
        public TagRepository(BlogDbContext context) : base(context)
        {
            _context = context;
        }
        //private BlogDbContext _context = new BlogDbContext();
        //public ResultClass Add(Tag item)
        //{
        //    item.CreatedOn = DateTime.Now;
        //    item.LastModifiedOn = DateTime.Now;
        //    item.PublishedOn = DateTime.Now;
        //    _context.Tags.Add(item);
        //    int resultBool = _context.SaveChanges();
        //    ResultClass result = new ResultClass();
        //    if (resultBool == 1)
        //    {
        //        result.Result = true;
        //        result.ResultMessages = new List<string>()
        //        {
        //            "Tag Updated"
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
        //    _context.Tags.Remove(_context.Tags.FirstOrDefault(e => e.Id == id));
        //    Tag item = Get(id);
        //    int resultBool = _context.SaveChanges();
        //    ResultClass result = new ResultClass();
        //    if (resultBool == 1)
        //    {
        //        result.Result = true;
        //        result.ResultMessages = new List<string>()
        //        {
        //            "Tag Deleted"
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
        //public Tag Get(int id)
        //{
        //    return _context.Tags.FirstOrDefault(e => e.Id == id);
        //}
        //public List<Tag> List()
        //{
        //    return _context.Tags.ToList();
        //}
        //public ResultClass Update(Tag item, int id)
        //{
        //    Tag tag = _context.Tags.Find(id);
        //    tag.Title = item.Title;
        //    tag.Description = item.Description;
        //    tag.IsPublished = item.IsPublished;
        //    tag.CreatedOn = item.CreatedOn;
        //    tag.LastModifiedOn = DateTime.Now;
        //    tag.PublishedOn = item.PublishedOn;
        //    int resultBool = _context.SaveChanges();
        //    ResultClass result = new ResultClass();
        //    if (resultBool == 1)
        //    {
        //        result.Result = true;
        //        result.ResultMessages = new List<string>()
        //        {
        //            "Tag Updated"
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