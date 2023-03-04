using Common.AllModel;
using Microsoft.EntityFrameworkCore;
using Reponsitory.Interface;
using static Common.DBContext.DBContext;

namespace Reponsitory.Reponsitory
{
    public class MusicReponsitory : IMusicReponsitory
    {
        private readonly DatabaseContext _dataBaseContext;
        public MusicReponsitory(DatabaseContext dataBaseContext)
        {
            _dataBaseContext = dataBaseContext;
        }
        public async Task<Guid> AddMusicOrUpdate(MusicDetail request)
        {
            var music = await _dataBaseContext.MusicDetail.Where(e => !e.IsDeleted && e.MusicId == request.MusicId).FirstOrDefaultAsync();
            if (music == null)
            {
                MusicDetail data = new MusicDetail
                {
                    MusicId = Guid.NewGuid(),
                    TimePlay = request.TimePlay,
                    MusicContent = request.MusicContent,
                    Status = true,
                    TypeMusicCode = request.TypeMusicCode,
                    CreatedAt = DateTime.Now,
                    CreatedBy = "",
                    UpdatedAt = DateTime.Now,
                    UpdatedBy = "",
                    UploadFileId = request.UploadFileId,
                    DatePlay = request.DatePlay
                };
                _dataBaseContext.MusicDetail.Add(data);
                await _dataBaseContext.SaveChangesAsync();
                return data.MusicId;
            }
            else
            {
                music.MusicId = Guid.NewGuid();
                music.TimePlay = request.TimePlay;
                music.MusicContent = request.MusicContent;
                music.Status = request.Status;
                music.TypeMusicCode = request.TypeMusicCode;
                music.UpdatedAt = DateTime.Now;
                music.UpdatedBy = request.UpdatedBy;
                music.UploadFileId = request.UploadFileId;
                music.DatePlay = request.DatePlay;
                _dataBaseContext.MusicDetail.Update(music);
                await _dataBaseContext.SaveChangesAsync();
                return music.MusicId;

            }
            
        }
       
        public async Task<List<MusicDetail>> ListMusic(string content)
        {
            if (String.IsNullOrEmpty(content))
            {
                return await _dataBaseContext.MusicDetail.Where(e => !e.IsDeleted).OrderByDescending(e => e.CreatedAt).ToListAsync();
            }
            return await _dataBaseContext.MusicDetail.Where(e => !e.IsDeleted && e.MusicContent.Trim().ToUpper().Contains(content.Trim().ToUpper())).OrderByDescending(e => e.CreatedAt).ToListAsync();
        }
        public async Task<bool> DeleteMusic(Guid id)
        {
            var data = await _dataBaseContext.MusicDetail.Where(e => e.MusicId == id).FirstOrDefaultAsync();
            if (data == null) return false;
            data.IsDeleted = true;
            _dataBaseContext.MusicDetail.Update(data);
            await _dataBaseContext.SaveChangesAsync();
            return true;
        }

    }
}
