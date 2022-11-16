using BlogProjectWebApi.Context;
using BlogProjectWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Repository
{
    public class EmailRepository : BaseRepository<EmailModel>
    {
        private readonly BlogDbContext _context;
        public EmailRepository(BlogDbContext context) : base(context)
        {
            _context = context;
        }
    }
}