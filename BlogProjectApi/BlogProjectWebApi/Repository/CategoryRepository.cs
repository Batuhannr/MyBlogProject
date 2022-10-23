using BlogProjectWebApi.IRepository;
using BlogProjectWebApi.Models;
using BlogProjectWebApi.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Repository
{
    public class CategoryRepository :IRepository<Category>
    {
        private BlogDbContext _context = new BlogDbContext();
        public ResultClass Add(Category item)
        {
            item.CreatedOn = DateTime.Now;
            item.LastModifiedOn = DateTime.Now;
            item.PublishedOn = DateTime.Now;
            _context.Categories.Add(item);
            int resultBool = _context.SaveChanges();
            ResultClass result = new ResultClass();
            if (resultBool == 1)
            {
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "Category Added"
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
            _context.Categories.Remove(_context.Categories.FirstOrDefault(e => e.Id == id));
            Category item = _context.Categories.FirstOrDefault(e => e.Id == id);
            int resultBool = _context.SaveChanges();
            ResultClass result = new ResultClass();
            if (resultBool == 1)
            {
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "Category Deleted"
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

        public Category Get(int id)
        {
            return _context.Categories.FirstOrDefault(e => e.Id == id);
        }

        public List<Category> List()
        {
            return _context.Categories.ToList();
        }

        public ResultClass Update(Category item, int id)
        {
            Category category = _context.Categories.Find(id);
            category.Title = item.Title;
            category.Description = item.Description;
            category.IsPublished = item.IsPublished;
            category.CreatedOn = item.CreatedOn;
            category.LastModifiedOn = DateTime.Now;
            category.PublishedOn = item.PublishedOn;
            int resultBool = _context.SaveChanges();
            ResultClass result = new ResultClass();
            if (resultBool == 1)
            {
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "Category Updated"
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