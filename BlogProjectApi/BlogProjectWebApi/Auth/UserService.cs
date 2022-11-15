using BlogProjectWebApi.Context;
using BlogProjectWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Auth
{
    public class UserService
    {

        BlogDbContext db = new BlogDbContext();
        public Users UyeLogin(string UserName, string password)
        {
            Users uye = db.Users.Where(s => s.UserName == UserName && s.Password == password).FirstOrDefault();
            return uye;
        }
    }
}