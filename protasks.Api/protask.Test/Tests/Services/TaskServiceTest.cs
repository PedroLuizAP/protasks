using protask.Test.TestData.Task;
using protasks.Data.Repository;
using protasks.Domain.Entities;
using protasks.Domain.Interfaces.Repository;
using protasks.Domain.Services;
using protasks.Domain.Resources;

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
    }
}
