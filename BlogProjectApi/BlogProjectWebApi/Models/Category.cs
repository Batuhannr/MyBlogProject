using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace BlogProjectWebApi.Models
{
    public class Category : BaseEntity
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
    }
}