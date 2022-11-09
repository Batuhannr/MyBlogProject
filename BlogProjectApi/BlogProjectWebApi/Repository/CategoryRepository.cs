using BlogProjectWebApi.IRepository;
using BlogProjectWebApi.Models;
using BlogProjectWebApi.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Repository
{
    public class CategoryRepository : BaseRepository<Category>
    {
        private readonly BlogDbContext _context;
        public CategoryRepository(BlogDbContext context) : base(context)
        {
            _context = context;
        }
        
    }
}