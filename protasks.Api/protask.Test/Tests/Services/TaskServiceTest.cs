using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using protask.Test.TestData.Task;
using protasks.Data.Context;
using protasks.Data.Repository;
using protasks.Domain.Entities;
using protasks.Domain.Interfaces.Repository;
using protasks.Domain.Interfaces.Services;
using protasks.Domain.Resources;
using protasks.Domain.Services;
using System.Runtime.InteropServices;

namespace protask.Test.Tests.Services
{
    public class TaskServiceTest : BaseTest
    {
        private TaskService _taskService;

        #region UseApiDatabase
        private ITaskService _itaskService;
        private void UseApiContext()
        {
            var services = new ServiceCollection();

            services.AddDbContext<DataContext>(options => options.UseSqlite("Data Source=ProTask.db"));
            services.AddScoped<ITaskRepository, TaskRepository>();
            services.AddScoped<IBaseRepository, BaseRepository>();
            services.AddScoped<ITaskService, TaskService>();


            var serviceProvider = services.BuildServiceProvider();

            _itaskService = serviceProvider.GetService<ITaskService>();

            var m1 = new TaskModel { Title = "TesteUnit", Description = "Teste", Priority = Priority.Low };
            var m2 = new TaskModel { Title = "Conclude", Description = "Conclude", Priority = Priority.Low };

            _itaskService.AddTask(m1);
            _itaskService.AddTask(m2);
        }
        #endregion
        private void NewService()
        {
            TaskRepository repo = new TaskRepository(DataContext);

            _taskService = new(repo);
        }

        public TaskServiceTest()
        {
            //NewService();
            UseApiContext();
            DataContext.ChangeTracker.Clear();
        }

        [Theory]
        [ClassData(typeof(TitleError))]
        public async Task AddTask_Test_TitleThrow(TaskModel task)
        {
            var exception = await Assert.ThrowsAsync<Exception>(() => _taskService.AddTask(task));

            Assert.Matches(exception.Message, Messages.RepeatedTitle);
        }

        [Theory]
        [ClassData(typeof(CompleteTask))]
        public async Task AddTask_Test_IdThrow(TaskModel task)
        {
            var exception = await Assert.ThrowsAsync<Exception>(() => _taskService.AddTask(task));

            Assert.Matches(exception.Message, Messages.ExistingTask);
        }

        [Theory]
        [ClassData(typeof(TaskWithoutId))]
        public async Task AddTask_Test_WithResult(TaskModel task)
        {
            await _taskService.AddTask(task);

            Assert.NotEqual(0, task.Id);
        }
        
        [Theory]
        [InlineData(0)]
        public async Task DeleteTask_Test_IdThrow(long id)
        {
            var exception = await Assert.ThrowsAsync<Exception>(() => _taskService.DeleteTask(id));

            Assert.Matches(exception.Message, Messages.NotExistTask);
        }

        [Theory]
        [ClassData(typeof(DatabaseTask))]
        public async Task UpdateTask_Test_WithResult(TaskModel task)
        {
            await _itaskService.UpdateTask(task);
            //await _taskService.UpdateTask(task);

            Assert.NotEqual(0, task.Id);
        }

        #region Out of use
        //[Theory]
        //[InlineData(0)]
        //public async Task ConcludeTask_Test_InvalidThrow(long id)
        //{
        //    var exception = await Assert.ThrowsAsync<Exception>(() => _taskService.ConcludeTask(id));

        //    Assert.Matches(exception.Message, Messages.InvalidTask);
        //}

        //[Theory]
        //[InlineData(2)]
        //public async Task ConcludeTask_Test_WithResult(long id)
        //{
        //    var concludeTask = await _taskService.ConcludeTask(id);

        //    Assert.True(concludeTask);
        //} 
        #endregion
    }
}
