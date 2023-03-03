using Common.AllModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.DBContext
{
    public class DBContext
    {
        public class DatabaseContext : DbContext
        {
            public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
            {

            }
            public DbSet<MusicDetail> MusicDetail { get; set; }
            public DbSet<UploadFile> UploadFile { get; set; }

        }
    }
}
