using BlogProjectWebApi.Context;
using BlogProjectWebApi.IRepository;
using BlogProjectWebApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace BlogProjectWebApi.Repository
{
    public class PostRepository : BaseRepository<Post>
    {
        private readonly BlogDbContext _context;
        public PostRepository(BlogDbContext context) : base(context)
        {
            _context = context;
        }
        
        public List<Post> lastCountPost(int count)
        {
            List<Post> lastfivepost = new List<Post>();
            lastfivepost = _context.Posts.OrderByDescending(s=>s.Id).Take(count).ToList();
            
            return lastfivepost;
        }
        public List<Post> mostPopulerPost(int count)
        {
            List<Post> lastfivepost = new List<Post>();
            lastfivepost = _context.Posts.OrderByDescending(s => s.ReadingCount).Take(count).ToList();

            return lastfivepost;
        }

        public void UpdateReadingCount(int postId)
        {
            Post post = _context.Posts.FirstOrDefault(s => s.Id == postId);
            post.ReadingCount = post.ReadingCount + 1;
        }

    }
}