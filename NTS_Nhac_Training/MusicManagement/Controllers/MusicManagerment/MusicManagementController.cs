using Common.AllModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MusicManagement.Constants;
using Reponsitory.Interface;
using static Common.BaseModel.ResponModel;

namespace MusicManagement.Controllers
{
    [Route("api")]
    [ApiController]
    public class MusicManagementController : BaseApiController
    {
        private readonly IMusicReponsitory _iMusicReponsitory;
        public MusicManagementController( IMusicReponsitory iMusicReponsitory )
        {
            _iMusicReponsitory = iMusicReponsitory; 
        }
        [HttpPost("music/Create")]
        public async Task<ActionResult<MResponseModel>> AddMusic([FromBody] MusicDetail data)
        {
            MResponseModel response = new MResponseModel();
            var result = await _iMusicReponsitory.AddMusicOrUpdate(data);           
            response.Data = result;
            response.Status = MConstants.MessageAddMusicSuccess;           
            return response;
        }
        [HttpGet("music/List")]
        public async Task<ActionResult<MResponseModel>> GetList()
        {
            MResponseModel response = new MResponseModel();
            var result = await _iMusicReponsitory.ListMusic();    
            if(result== null)
            {
                response.Status = MConstants.MessageNotFound;
                return response;
            }
            response.Data = result;
            return response;
        }
        [HttpPost("music/update")]
        public async Task<ActionResult<MResponseModel>> UpdateMusic([FromBody] MusicDetail data)
        {
            MResponseModel response = new MResponseModel();
            var result = await _iMusicReponsitory.AddMusicOrUpdate(data);
            response.Data = result;
            response.Status = MConstants.MessageAddMusicSuccess;
            return response;
        }
        [HttpPost("music/Delete")]
        public async Task<ActionResult<MResponseModel>> DeleteMusic(Guid id)
        {
            MResponseModel response = new MResponseModel();
            var result = await _iMusicReponsitory.DeleteMusic(id);
            if (result == null)
            {
                response.Status = MConstants.MessageDeleteFail;
                return response;
            }
            response.Data = result;
            response.Status = MConstants.MessageDeleteSuccess;
            return response;
        }
    }
}
