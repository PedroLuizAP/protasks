using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using protasks.Domain.Entities;

namespace protasks.Data.Mappings
{
    public class TaskMap : IEntityTypeConfiguration<TaskModel>
    {
        public void Configure(EntityTypeBuilder<TaskModel> builder)
        {
            builder.ToTable("Task");

            builder.Property(t => t.Title).HasColumnType("varchar(100)");

            builder.Property(t => t.Description).HasColumnType("varchar(255)");
        }
    }
}
