using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Models
{
    public class PostCategory : EnBaseEntity
    {

        [Required]
        public int PostId { get; set; }
        public Post Post { get; set; }
        [Required]
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }

}