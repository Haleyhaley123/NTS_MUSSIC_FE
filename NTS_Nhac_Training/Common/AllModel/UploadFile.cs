using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Common.BaseModel.BaseModel;

namespace Common.AllModel
{
    [Table("UploadFile")]
    public class UploadFile : BaseTableModel
    {
        [Key]
        public Guid FileId { get; set; }    
        public string Path { get; set; }    
        public string Url { get; set; }
        public string FileSize { get; set; }

    }
}
