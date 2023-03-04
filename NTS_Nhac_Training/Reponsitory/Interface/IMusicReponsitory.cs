using Common.AllModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reponsitory.Interface
{
    public interface IMusicReponsitory
    {
        public Task<Guid> AddMusicOrUpdate(MusicDetail request);
        public Task<List<MusicDetail>> ListMusic(string content);
        public Task<bool> DeleteMusic(Guid id);
    }
}
