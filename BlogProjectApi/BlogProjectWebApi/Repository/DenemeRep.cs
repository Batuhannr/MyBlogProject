using BlogProjectWebApi.Context;
using BlogProjectWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Repository
{
    public class DenemeRep : BaseRepository<Category>
    {
        private readonly BlogDbContext _context;
        public DenemeRep( BlogDbContext context  ):base(context)
        {
            _context = context;
        }

    }
}