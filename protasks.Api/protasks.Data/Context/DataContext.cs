using Microsoft.EntityFrameworkCore;
using protasks.Data.Mappings;
using protasks.Domain.Entities;

namespace protasks.Data.Context
{
    public class DataContext : DbContext
    {
        public DataContext (DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<TaskModel> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new TaskMap());
        }
    }
}