﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogProjectWebApi.Models
{
    public class ResultClass
    {
        public bool Result { get; set; }
        public List<string> ResultMessages { get; set; }

        public object ResultObject { get; set; }
    }
}