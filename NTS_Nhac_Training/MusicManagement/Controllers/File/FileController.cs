using Common.AllModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Amqp.Framing;
using static Common.DBContext.DBContext;

namespace MusicManagement.Controllers.File
{
    [Route("api")]
    [ApiController]
    public class FileController : BaseApiController
    {
        private readonly DatabaseContext _dataBaseContext;
        public FileController(DatabaseContext dataBaseContext)
        {
           
            _dataBaseContext = dataBaseContext;
        }
        [HttpPost("UploadFile")]
        public async Task<IActionResult> UploadMp3File(List<IFormFile> files)
        {
            //var a = HttpContext.Request;
            var upload_path = Path.Combine("D:\\FileShare");
            var date_now = DateTime.Now.ToString("dd-MM-yyyy");
            var folder_virtual_path = $"/UploadFiles/MP3/Temp/{date_now}";
            var folder_physic_path = $"{upload_path}{folder_virtual_path}";

            bool exists = Directory.Exists(folder_physic_path);
            if (!exists)
                Directory.CreateDirectory(folder_physic_path);
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    bool isCheckTypeFile = IsCheckTypeFile();
                    if(!isCheckTypeFile) return NotFound(new { Message = "Không đúng định dạng file mp3"});
                    string file_name = $"{Guid.NewGuid().ToString()}.mp3";
                    string file_virtual_path = $"{folder_virtual_path}/{file_name}";
                    string file_physic_path = $"{upload_path}{file_virtual_path}";
                    using (var stream = System.IO.File.Create(file_virtual_path))
                    {
                        await formFile.CopyToAsync(stream);
                    }
                    if (file_name.Length > 0)
                    {
                        var data = new UploadFile()
                        {
                           FileId = Guid.NewGuid(),
                           Path = file_physic_path,
                           Url = file_virtual_path,
                           FileSize = "",
                           CreatedAt = DateTime.Now,
                        };
                        _dataBaseContext.UploadFile.Add(data);
                        await _dataBaseContext.SaveChangesAsync();
                        return Ok(new { Id = data.FileId });
                    } 
                    
                }
            }
            return NotFound(new { Id = "" });;              
        }
        [HttpPost("ReadFile")]
        public async Task<IActionResult> ReadMp3File()
        {
            var upload_path = System.Configuration.ConfigurationManager.AppSettings["FilePath"];
           
            return Ok(new { url = "" });

        }
        private bool IsCheckTypeFile()
        {
            return true;
        }
    }
}
