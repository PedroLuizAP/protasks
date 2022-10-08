using Microsoft.EntityFrameworkCore;
using protasks.Interface.Models;

namespace protasks.Interface.Data
{
    public class DataContext : DbContext
    {
        public DataContext (DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<TaskModel> Tasks { get; set; }
    }
}