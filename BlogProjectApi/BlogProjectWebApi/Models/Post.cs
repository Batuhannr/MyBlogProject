using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace BlogProjectWebApi.Models
{
    public class Post : BaseEntity
    {
        public Post()
        {
            PostTags = new List<PostTag>();
            PostCategories = new List<PostCategory>();
            Comments = new List<Comment>();
        }

        [Required]
        public string Title { get; set; }
        [Required]
        public string Summary { get; set; }
        [Required]
        public string PostContents { get; set; }
        public ICollection<PostTag> PostTags { get; set; }
        public ICollection<PostCategory> PostCategories { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}