using BlogProjectWebApi.Models;
using BlogProjectWebApi.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace BlogProjectWebApi.Controllers
{
    public class PostTagController : ApiController
    {
        private PostTagRepository _repo = new PostTagRepository();

        [HttpGet]
        [Route("api/postTag/get")]
        public ResultClass GetPostTag()
        {
            List<PostTag> comments = _repo.List();
            ResultClass result = new ResultClass();
            if (comments != null)
            {
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "PostTag Loaded"
                };
                result.ResultObject = comments;
                return result;
            }
            else
            {
                result.Result = false;
                result.ResultMessages = new List<string>()
                {
                    "PostTag Not Loaded"
                };
                result.ResultObject = null;
                return result;
            }
        }

        [HttpGet]
        [Route("api/postTag/get/{id}")]
        public ResultClass GetPostTagById(int id)
        {
            PostTag comment = _repo.Get(id);
            ResultClass result = new ResultClass();
            if (comment != null)
            {
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "PostTag Loaded"
                };
                result.ResultObject = comment;
                return result;

            }
            else
            {
                result.Result = false;
                result.ResultMessages = new List<string>()
                {
                    "PostTag is not found"
                };
                result.ResultObject = null;
                return result;
            }
        }

        [HttpPost]
        [Route("api/postTag/addPostTag")]
        public ResultClass AddPostTag(PostTag item)
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
                    "PostTag is not added. Please send to required prop"
                };
                response.ResultObject = null;
                return response;
            }
        }
        [HttpPut]
        [Route("api/postTag/updatePostTag/{Id}")]
        public ResultClass UpdatePostTag(PostTag item, int id)
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
        [Route("api/postTag/removePostTag/{id}")]
        public ResultClass CommentPostTag(int id)
        {
            return _repo.Delete(id);
        }
    }
}