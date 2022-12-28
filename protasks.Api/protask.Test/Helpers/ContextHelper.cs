using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using protasks.Data.Context;
using protasks.Domain.Entities;

namespace protask.Test.Helpers
{
    internal static class ContextHelper
    {
        internal static DbContextOptions<DataContext> GetOptionsBuilder() => new DbContextOptionsBuilder<DataContext>().UseInMemoryDatabase("TaskControllerTest").ConfigureWarnings(b => b.Ignore(InMemoryEventId.TransactionIgnoredWarning)).Options;

        internal static void MockContext(this DataContext context)
        {
            if (!context.Tasks.Any())
            {
                context.Add(new TaskModel { Id = 1, Title = "TesteUnit", Description = "Teste", Priority = Priority.Low });
                context.Add(new TaskModel { Id = 2, Title = "Conclude", Description = "Conclude", Priority = Priority.Low });
                context.Add(new TaskModel { Id = 3, Title = "Conclude", Description = "Conclude", Priority = Priority.Low });

                context.SaveChanges();
            }
        }
    }
}
