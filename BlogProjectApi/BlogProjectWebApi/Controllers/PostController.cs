using BlogProjectWebApi.Models;
using BlogProjectWebApi.Repository;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace BlogProjectWebApi.Controllers
{
    public class PostController : ApiController
    {

        private PostRepository repo;
        private PostRepository _repo
        {
            get
            {
                if (repo == null)
                    repo = new PostRepository();
                return repo;
            }
        }


        private TagRepository TagRepository;
        private TagRepository _TagRepository
        {
            get
            {
                if (TagRepository == null)
                    TagRepository = new TagRepository();
                return TagRepository;
            }
        }


        private CategoryRepository CategoryRepository;
        private CategoryRepository _CategoryRepository
        {
            get
            {
                if (CategoryRepository == null)
                    CategoryRepository = new CategoryRepository();
                return CategoryRepository;
            }
        }



        private PostTagRepository postTagRepository;
        private PostTagRepository _postTagRepository
        {
            get
            {
                if (postTagRepository == null)
                    postTagRepository = new PostTagRepository();
                return postTagRepository;
            }
        }



        private PostCategoryRepository postCategoryRepository;
        private PostCategoryRepository _postCategoryRepository
        {
            get
            {
                if (postCategoryRepository == null)
                    postCategoryRepository = new PostCategoryRepository();
                return postCategoryRepository;
            }
        }

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