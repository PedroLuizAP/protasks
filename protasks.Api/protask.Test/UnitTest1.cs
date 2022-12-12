using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using protasks.Data.Context;
using protasks.Data.Repository;
using protasks.Domain.Entities;

namespace protask.Test
{
    public class UnitTest1
    {
        private DbContextOptions<DataContext> _dbContextOptions;
        public UnitTest1()
        {
            _dbContextOptions = new DbContextOptionsBuilder<DataContext>().UseInMemoryDatabase("TaskControllerTest").ConfigureWarnings(b => b.Ignore(InMemoryEventId.TransactionIgnoredWarning)).Options;
        }

        [Fact]
        public async Task Test1()
        {
            using (var context = new DataContext(_dbContextOptions))
            {
                //mock
                context.Add(new TaskModel { Title = "TesteUnit", Description = "Teste" });

                context.SaveChanges();

                TaskRepository taskRepository = new(context);

                var teste = await taskRepository.GetAllAsync();
            }
        }
    }
}