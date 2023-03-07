using Common.BaseModel;

namespace MusicManagement.Models
{
    public class FilterModel
    {
        public string Content { get; set; }
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
    }
}
