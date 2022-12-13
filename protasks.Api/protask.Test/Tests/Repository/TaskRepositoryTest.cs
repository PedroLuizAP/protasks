using protasks.Data.Repository;
using protasks.Domain.Entities;
using protasks.Domain.Interfaces.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace protask.Test.Tests.Repository
{
    public class TaskRepositoryTest : BaseTest
    {
        private TaskRepository _taskRepository;
        public TaskRepositoryTest() : base()
        {
            _taskRepository = new(DataContext);
        }

        [Fact]
        internal async Task GetAllAsync_Test_NotEmpty()
        {            
            var allTask = await _taskRepository.GetAllAsync();

            Assert.NotEmpty(allTask);
        }
    }
}
