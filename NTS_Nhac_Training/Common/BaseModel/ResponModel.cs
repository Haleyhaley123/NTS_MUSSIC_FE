using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.BaseModel
{
    public class ResponModel
    {
        public class MResponseModel
        {
            public string Status { get; set; }
            public object Data { get; set; }
            public List<Error> Errors { get; set; }
        }
        public class Error
        {
            public int Code { get; set; }
            public string Message { get; set; }
            public string Field { get; set; }
        }

    }
}
