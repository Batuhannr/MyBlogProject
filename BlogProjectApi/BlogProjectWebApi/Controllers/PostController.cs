using BlogProjectWebApi.Models;
using BlogProjectWebApi.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace BlogProjectWebApi.Controllers
{
    public class PostController : ApiController
    {
        private PostRepository _repo = new PostRepository();
        private PostTagRepository _postTagRepository = new PostTagRepository();
        private PostCategoryRepository _postCategoryRepository = new PostCategoryRepository();
        private TagRepository _TagRepository = new TagRepository();
        private CategoryRepository _CategoryRepository = new CategoryRepository();

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
            List<PostTag> postTags =_postTagRepository.GetPostTag(postId);
            foreach (var item in postTags)
            {
                item.Tag = _TagRepository.Get(item.TagId);
            }
            return postTags;
        }
        public List<PostCategory> GetPostCategory(int postId)
        {
            List<PostCategory> postCategory = _postCategoryRepository.GetPostCategory(postId);
            foreach (var item in postCategory)
            {
                item.Category = _CategoryRepository.Get(item.CategoryId);
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
            ResultClass response = new ResultClass();
            if (ModelState.IsValid)
            {
                response = _repo.Add(item);
                return response;
            }
            else
            {
                response.Result = false;
                response.ResultMessages = new List<string>(){
                    "Post is not added. Please send to required prop"
                };
                response.ResultObject = null;
                return response;
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