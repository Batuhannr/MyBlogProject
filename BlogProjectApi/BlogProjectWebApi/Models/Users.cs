﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Models
{
    public class Users :EnBaseEntity
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string NameSurname { get; set; }
        public int Admin { get; set; }
    }
}