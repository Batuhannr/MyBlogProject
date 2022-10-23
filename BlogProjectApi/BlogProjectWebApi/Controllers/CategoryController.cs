﻿using BlogProjectWebApi.Models;
using BlogProjectWebApi.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace BlogProjectWebApi.Controllers
{
    public class CategoryController : ApiController
    {
        private CategoryRepository _repo = new CategoryRepository();
        [HttpGet]
        [Route("api/category/get")]
        public ResultClass GetCategory()
        {
            List<Category> categories = _repo.List();
            ResultClass result = new ResultClass();
            if (categories.Count > 0)
            {
                //return Request.CreateResponse(HttpStatusCode.OK, categories);
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "Succes"
                };
                result.ResultObject = categories;
                return result;

            }
            else
            {
                //return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Categories is empty");
                result.Result = false;
                result.ResultMessages = new List<string>()
                {
                    "Categories Not loaded"
                };
                result.ResultObject = null;
                return result;

            }
        }

        [HttpGet]
        [Route("api/category/get/{id}")]
        public ResultClass GetCategoryById(int id)
        {
            Category category = _repo.Get(id);
            ResultClass result = new ResultClass();
            if (category != null)
            {
                //return Request.CreateResponse(HttpStatusCode.OK, categories);
                result.Result = true;
                result.ResultMessages = new List<string>()
                {
                    "Succes"
                };
                result.ResultObject = category;
                return result;

            }
            else
            {
                //return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Categories is empty");
                result.Result = false;
                result.ResultMessages = new List<string>()
                {
                    "Category Not loaded"
                };
                result.ResultObject = null;
                return result;
            }
        }
        [HttpPost]
        [Route("api/category/addCategory")]
        public ResultClass PostCategory(Category category)
        {
            ResultClass response = new ResultClass();
            if (ModelState.IsValid)
            {
                response = _repo.Add(category);
                //return Request.CreateResponse(HttpStatusCode.OK, "Ekleme Başarılı");
                return response;
            }
            else
            {
                response.Result = false;
                response.ResultMessages = new List<string>()
                {
                    "Please Required prop sent"
                };
                response.ResultObject = category;
                //return Request.CreateErrorResponse(HttpStatusCode.NotFound, ModelState);
                return response;
            }
        }
        [HttpPut]
        [Route("api/category/updatecategory/{Id}")]
        public ResultClass UpdateCategory(Category category, int Id)
        {
            ResultClass response = new ResultClass();
            if (ModelState.IsValid)
            {
                response = _repo.Update(category, Id);
                //return Request.CreateResponse(HttpStatusCode.OK, "Güncelleme Başarılı");
                return response;
            }
            else
            {
                response.Result = false;
                response.ResultMessages = new List<string>()
                {
                    "Please Required prop sent"
                };
                response.ResultObject = category;
                //return Request.CreateErrorResponse(HttpStatusCode.NotFound, ModelState);
                return response;
            }
        }

        [HttpDelete]
        [Route("api/category/removecategory/{id}")]
        public ResultClass RemoveCategory(int id)
        {
            return _repo.Delete(id);
        }
    }
}