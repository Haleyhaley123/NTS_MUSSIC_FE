using Common.BaseModel;

namespace MusicManagement.Models
{
    public class FilterModel
    {
        public string Content { get; set; }
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
    }
    public class DatePlayModel
    {
        public string dayofMonths { get; set; }
        public string monthPlay { get; set; }
    }
}
