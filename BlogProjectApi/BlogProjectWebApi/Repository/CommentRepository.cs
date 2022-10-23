using BlogProjectWebApi.Context;
using BlogProjectWebApi.IRepository;
using BlogProjectWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Repository
{
    public class CommentRepository : IRepository<Comment>
    {
        private BlogDbContext _context = new BlogDbContext();

        public ResultClass Add(Comment item)
        {
            item.CreatedOn = DateTime.Now;
            item.LastModifiedOn = DateTime.Now;
            item.PublishedOn = DateTime.Now;
            _context.Comments.Add(item);
            int resultBool = _context.SaveChanges();
            ResultClass result = new ResultClass();
            if (resultBool == 1)
            {
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "Comment Added"
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
            _context.Comments.Remove(_context.Comments.FirstOrDefault(e => e.Id == id));
            Comment item = _context.Comments.FirstOrDefault(e => e.Id == id);
            int resultBool = _context.SaveChanges();
            ResultClass result = new ResultClass();
            if (resultBool == 1)
            {
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "Comment Deleted"
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

        public Comment Get(int id)
        {
            return _context.Comments.FirstOrDefault(e => e.Id == id);
        }

        public List<Comment> List()
        {
            return _context.Comments.ToList();

        }

        public ResultClass Update(Comment item, int id)
        {
            Comment Comment = _context.Comments.Find(id);
            Comment.CommentContents = item.CommentContents;
            Comment.Parent = item.Parent;
            Comment.ParentPost = item.ParentPost;
            Comment.PostedBy = item.PostedBy;
            Comment.LastModifiedOn = DateTime.Now;
            int resultBool = _context.SaveChanges();
            ResultClass result = new ResultClass();
            if (resultBool == 1)
            {
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "Comment Updated"
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