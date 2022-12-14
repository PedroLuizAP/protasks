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
        private readonly TaskRepository _taskRepository;
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
        
        [Fact]
        internal async Task GetByIdAsync_Test_WithResult()
        {            
            var allTask = await _taskRepository.GetByIdAsync(1);

            Assert.NotNull(allTask);
        }
        
        [Fact]
        internal async Task GetByIdAsync_Test_WithoutResult()
        {            
            var allTask = await _taskRepository.GetByIdAsync(0);

            Assert.Null(allTask);
        }
        
        [Fact]
        internal async Task GetByTitleAsync_Test_WithResult()
        {            
            var allTask = await _taskRepository.GetByTitleAsync("TesteUnit");

            Assert.NotNull(allTask);
        }
        
        [Fact]
        internal async Task GetByTitleAsync_Test_WithoutResult()
        {            
            var allTask = await _taskRepository.GetByTitleAsync("");

            Assert.Null(allTask);
        }
    }
}
