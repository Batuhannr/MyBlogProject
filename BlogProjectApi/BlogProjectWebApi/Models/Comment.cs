using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;


namespace BlogProjectWebApi.Models
{
    public class Comment : BaseEntity
    {
        [Required]
        public string CommentContents { get; set; }
        [Required]
        public string PostedBy { get; set; }
        public Comment Parent { get; set; }
        public int? ParentId { get; set; }
        public Post ParentPost { get; set; }
        public int PostId { get; set; }
        public ICollection<Comment> underComments { get; set; }
    }
}