using protask.Test.TestData.Task;
using protasks.Data.Repository;
using protasks.Domain.Entities;
using protasks.Domain.Interfaces.Repository;
using protasks.Domain.Resources;
using protasks.Domain.Services;

namespace protask.Test.Tests.Services
{
    public class TaskServiceTest : BaseTest
    {
        private readonly TaskService _taskService;
        public TaskServiceTest()
        {
            ITaskRepository repo = new TaskRepository(DataContext);

            _taskService = new(repo);
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
        [InlineData(0)]
        public async Task ConcludeTask_Test_InvalidThrow(long id)
        {
            var exception = await Assert.ThrowsAsync<Exception>(() => _taskService.ConcludeTask(id));

            Assert.Matches(exception.Message, Messages.InvalidTask);
        }

        [Theory]
        [InlineData(2)]
        public async Task ConcludeTask_Test_WithResult(long id)
        {
            var concludeTask = await _taskService.ConcludeTask(id);

            Assert.True(concludeTask);
        }
    }
}
