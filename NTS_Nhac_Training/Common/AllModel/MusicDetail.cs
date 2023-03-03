using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.AllModel
{
    [Table("MusicDetail")]
    public class MusicDetail
    {
        [Key]
        public Guid MusicId { get; set; }
        public string? TimePlay { get; set; }
        public string? DatePlay { get; set; }
        public string? MusicContent { get; set; }
        public bool Status { get; set; }
        public string TypeMusicCode { get; set; }//Một lần: MUSICDAY; theo tháng: MUSICMONTH ; theo năm: MUSICYEAR
        public string? DeletedBy { get; set; }
        public DateTime? DeletedAt { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string? UpdatedBy { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public bool IsDeleted { get; set; } = false;
        public Guid? UploadFileId { get; set; }
        
    }
}
