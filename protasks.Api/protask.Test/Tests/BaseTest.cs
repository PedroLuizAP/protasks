using Microsoft.EntityFrameworkCore;
using protask.Test.Helpers;
using protasks.Data.Context;

namespace protask.Test.Tests
{
    public abstract class BaseTest
    {
        private readonly DbContextOptions<DataContext> _dbContextOptions;
        protected DataContext DataContext { get; set; }
        protected BaseTest()
        {
            _dbContextOptions = ContextHelper.GetOptionsBuilder();

            DataContext = new(_dbContextOptions);

            DataContext.MockContext();

            DataContext.ChangeTracker.Clear();
        }
    }
}
