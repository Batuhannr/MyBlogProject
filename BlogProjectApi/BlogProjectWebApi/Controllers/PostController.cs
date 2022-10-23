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

        [HttpGet]
        [Route("api/post/get")]
        public ResultClass GetPost()
        {
            List<Post> comments = _repo.List();
            ResultClass result = new ResultClass();
            if (comments != null)
            {
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "Post Loaded"
                };
                result.ResultObject = comments;
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