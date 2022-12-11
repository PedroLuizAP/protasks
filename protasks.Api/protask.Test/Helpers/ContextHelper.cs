using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using protasks.Data.Context;
using protasks.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace protask.Test.Helpers
{
    internal class ContextHelper
    {
        internal DbContextOptions<DataContext> GetOptionsBuilder() => new DbContextOptionsBuilder<DataContext>().UseInMemoryDatabase("TaskControllerTest").ConfigureWarnings(b => b.Ignore(InMemoryEventId.TransactionIgnoredWarning)).Options;

        internal void MockContext(DataContext context)
        {
            context.Add(new TaskModel { Title = "TesteUnit", Description = "Teste", Priority = Priority.Low });

            context.SaveChanges();
        }        
    }
}
