using BlogProjectWebApi.Context;
using BlogProjectWebApi.IRepository;
using BlogProjectWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Repository
{
    public class CommentRepository : BaseRepository<Comment>
    {
        private readonly BlogDbContext _context;
        public CommentRepository(BlogDbContext context) : base(context)
        {
            _context = context;
        }
        
        public List<Comment> getPostComment(int postId)
        {
            List<Comment> allPostComment = new List<Comment>();
            allPostComment = _context.Comments.Where(s => s.PostId == postId).ToList();
            List<Comment> baseComment = new List<Comment>();
            baseComment = allPostComment.Where(s => s.ParentId == null).ToList();
            List<Comment> underComment = new List<Comment>();
            underComment = allPostComment.Where(s => s.ParentId != null).ToList();
            foreach (var item in baseComment)
            {
                item.underComments = underComment.Where(s => s.ParentId == item.Id).ToList();
            }
            return baseComment;
        }

    }
}