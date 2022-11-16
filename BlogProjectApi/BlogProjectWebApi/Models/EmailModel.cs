using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Models
{
    public class EmailModel : EnBaseEntity
    {
        public string NameSurname { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
        public string Email { get; set; }
    }
}