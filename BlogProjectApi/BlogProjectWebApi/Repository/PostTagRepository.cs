using BlogProjectWebApi.Context;
using BlogProjectWebApi.IRepository;
using BlogProjectWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Repository
{
    public class PostTagRepository : IRepository<PostTag>
    {
        BlogDbContext _context = new BlogDbContext();
        public ResultClass Add(PostTag item)
        {
            _context.postTags.Add(item);
            int resultBool = _context.SaveChanges();
            ResultClass result = new ResultClass();
            if (resultBool == 1)
            {
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "Post Tag Added"
                };
                result.ResultObject = item;
                return result;
            }
            else
            {
                result.Result = false;
                result.ResultMessages = new List<string>()
                {
                    "Error"
                };
                result.ResultObject = item;
                return result;
            }

        }

        public ResultClass Delete(int id)
        {
            _context.postTags.Remove(_context.postTags.FirstOrDefault(e => e.Id == id));
            PostTag item = Get(id);
            int resultBool = _context.SaveChanges();
            ResultClass result = new ResultClass();
            if (resultBool == 1)
            {
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "Post Tag Deleted"
                };
                result.ResultObject = item;
                return result;
            }
            else
            {
                result.Result = false;
                result.ResultMessages = new List<string>()
                {
                    "Error"
                };
                result.ResultObject = item;
                return result;
            }
        }

        public PostTag Get(int id)
        {
            return _context.postTags.FirstOrDefault(e => e.Id == id);
        }

        public List<PostTag> List()
        {
            return _context.postTags.ToList();
        }

        public ResultClass Update(PostTag item, int id)
        {
            PostTag postTag = _context.postTags.Find(id);
            postTag.PostId = item.PostId;
            postTag.TagId = item.TagId;
            int resultBool = _context.SaveChanges();
            ResultClass result = new ResultClass();
            if (resultBool == 1)
            {
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "Post Tag Updated"
                };
                result.ResultObject = item;
                return result;
            }
            else
            {
                result.Result = false;
                result.ResultMessages = new List<string>()
                {
                    "Error"
                };
                result.ResultObject = item;
                return result;
            }
        }
    }
}