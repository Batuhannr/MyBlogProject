using BlogProjectWebApi.Context;
using BlogProjectWebApi.Models;
using BlogProjectWebApi.Repository;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BlogProjectWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PostController : ApiController
    {
        public static BlogDbContext _context = new BlogDbContext();
        private PostRepository _repo = new PostRepository(_context);
        private TagRepository _TagRepository = new TagRepository(_context) ;
        private CategoryRepository _CategoryRepository = new CategoryRepository(_context) ;
        private PostTagRepository _postTagRepository = new PostTagRepository(_context) ;
        private PostCategoryRepository _postCategoryRepository = new PostCategoryRepository(_context) ;

        [HttpGet]
        [Route("api/post/get")]
        public ResultClass GetPost()
        {
            List<Post> Posts = _repo.List();
            ResultClass result = new ResultClass();
            if (Posts != null)
            {
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "Post Loaded"
                };
                foreach (var item in Posts)
                {
                    item.PostTags = GetPostTagById(item.Id);
                    item.PostCategories = GetPostCategory(item.Id);

                }
                result.ResultObject = Posts;
                return result;
            }
            else
            {
                result.Result = false;
                result.ResultMessages = new List<string>()
                {
                    "Post Not Loaded"
                };
                result.ResultObject = null;
                return result;
            }
        }
        public List<PostTag> GetPostTagById(int postId)
        {
            List<PostTag> postTags = _postTagRepository.GetPostTag(postId);
            foreach (var item in postTags)
            {
                //item.Tag = _TagRepository.Get(item.TagId);
            }
            return postTags;
        }
        public List<PostCategory> GetPostCategory(int postId)
        {
            List<PostCategory> postCategory = _postCategoryRepository.GetPostCategory(postId);
            foreach (var item in postCategory)
            {
                //item.Category = _CategoryRepository.Get(item.CategoryId);
            }
            return postCategory;
        }

        [HttpGet]
        [Route("api/post/get/{id}")]
        public ResultClass GetPostById(int id)
        {
            Post comment = _repo.Get(id);
            ResultClass result = new ResultClass();
            if (comment != null)
            {
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "Post Loaded"
                };
                comment.PostTags = GetPostTagById(comment.Id);
                comment.PostCategories = GetPostCategory(comment.Id);
                result.ResultObject = comment;


                return result;

            }
            else
            {
                result.Result = false;
                result.ResultMessages = new List<string>()
                {
                    "Post is not found"
                };
                result.ResultObject = null;
                return result;
            }
        }

        [HttpPost]
        [Route("api/post/addPost")]
        public ResultClass AddPost(Post item)
        {
            item.CreatedOn =new DateTime(DateTime.Now.Year,DateTime.Now.Month,DateTime.Now.Day);
            item.LastModifiedOn = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day);
            item.PublishedOn = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day);
            try
            {
                ResultClass response = new ResultClass();
                response = _repo.Add(item);
                return response;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        [HttpPut]
        [Route("api/post/updatePost/{Id}")]
        public ResultClass UpdatePost(Post item, int id)
        {
            ResultClass response = new ResultClass();
            if (ModelState.IsValid)
            {
                response = _repo.Update(item, id);
                return response;
            }
            else
            {
                response.Result = false;
                response.ResultMessages = new List<string>(){
                    "Post is not updated. Please send to required prop"
                };
                response.ResultObject = null;
                return response;
            }
        }

        [HttpDelete]
        [Route("api/post/removePost/{id}")]
        public ResultClass CommentPost(int id)
        {
            return _repo.Delete(id);
        }
    }
}