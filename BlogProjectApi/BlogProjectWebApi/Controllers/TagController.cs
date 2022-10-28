﻿using BlogProjectWebApi.Models;
using BlogProjectWebApi.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace BlogProjectWebApi.Controllers
{
    public class TagController : ApiController
    {
        private TagRepository _repo = new TagRepository();

        [HttpGet]
        [Route("api/tag/get")]
        public ResultClass GetTags()
        {
            List<Tag> tags = _repo.List();
            ResultClass result = new ResultClass();
            if (tags != null)
            {
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "Tags Loaded"
                };
                result.ResultObject = tags;
                return result;
            }
            else
            {
                result.Result = false;
                result.ResultMessages = new List<string>()
                {
                    "Tags Not Loaded"
                };
                result.ResultObject = null;
                return result;
            }
        }

        [HttpGet]
        [Route("api/tag/get/{id}")]
        public ResultClass GetTagById(int id)
        {
            Tag tag = _repo.Get(id);
            ResultClass result = new ResultClass();
            if (tag != null)
            {
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "Tag Loaded"
                };
                result.ResultObject = tag;
                return result;

            }
            else
            {
                result.Result = false;
                result.ResultMessages = new List<string>()
                {
                    "Tags is not found"
                };
                result.ResultObject = null;
                return result;
            }
        }

        [HttpPost]
        [Route("api/tag/addTag")]
        public ResultClass AddTag(Tag item)
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
                    "Tag is not added. Please send to required prop"
                };
                response.ResultObject = null;
                return response;
            }
        }
        [HttpPut]
        [Route("api/tag/updateTag/{Id}")]
        public ResultClass UpdateTag(Tag tag, int id)
        {
            ResultClass response = new ResultClass();
            if (ModelState.IsValid)
            {
                response = _repo.Update(tag, id);
                return response;
            }
            else
            {
                response.Result = false;
                response.ResultMessages = new List<string>(){
                    "Tag is not updated. Please send to required prop"
                };
                response.ResultObject = null;
                return response;
            }
        }

        [HttpDelete]
        [Route("api/tag/removeTag/{id}")]
        public ResultClass RemoveTag(int id)
        {
            return _repo.Delete(id);
        }

    }
}