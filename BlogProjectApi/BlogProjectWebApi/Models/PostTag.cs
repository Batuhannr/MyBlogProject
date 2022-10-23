using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Models
{
    public class PostTag
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int PostId { get; set; }
        public Post Post { get; set; }
        [Required]
        public int TagId { get; set; }
        public Tag Tag { get; set; }
    }
}