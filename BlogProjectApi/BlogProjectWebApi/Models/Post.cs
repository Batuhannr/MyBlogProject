﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace BlogProjectWebApi.Models
{
    public class Post : BaseEntity
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Summary { get; set; }
        [Required]
        public string PostContents { get; set; }
        public List<PostTag> PostTags { get; set; }
        public List<PostCategory> PostCategories { get; set; }
        public List<Comment> Comments { get; set; }
    }
}