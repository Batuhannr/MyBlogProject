using BlogProjectWebApi.Context;
using BlogProjectWebApi.IRepository;
using BlogProjectWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Repository
{
    public class BaseRepository<T> : IRepository<T>
        where T : EnBaseEntity , new() 
    {
        private readonly BlogDbContext _context;
        public BaseRepository(BlogDbContext context)
        {
            _context = context;
        }

        public ResultClass Add(T item)
        {
            //_context.Set<T>().Add(item);
            return new ResultClass();
        }

        public ResultClass Delete(int id)
        {
            throw new NotImplementedException();
        }

        public T Get(int id)
        {
            throw new NotImplementedException();
        }

        public List<T> List()
        {
            throw new NotImplementedException();
        }

        public ResultClass Update(T item, int id)
        {
            throw new NotImplementedException();
        }
    }
}