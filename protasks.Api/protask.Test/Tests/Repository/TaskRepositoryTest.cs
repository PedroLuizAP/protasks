using protasks.Data.Repository;

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

        [Theory]
        [InlineData(1)]
        internal async Task GetByIdAsync_Test_WithResult(long id)
        {
            var allTask = await _taskRepository.GetByIdAsync(id);

            Assert.NotNull(allTask);
        }

        [Theory]
        [InlineData(0)]
        internal async Task GetByIdAsync_Test_WithoutResult(long id)
        {
            var allTask = await _taskRepository.GetByIdAsync(id);

            Assert.Null(allTask);
        }

        [Theory]
        [InlineData("TesteUnit")]
        internal async Task GetByTitleAsync_Test_WithResult(string title)
        {
            var allTask = await _taskRepository.GetByTitleAsync(title);

            Assert.NotNull(allTask);
        }

        [Theory]
        [InlineData("")]
        internal async Task GetByTitleAsync_Test_WithoutResult(string title)
        {
            var allTask = await _taskRepository.GetByTitleAsync(title);

            Assert.Null(allTask);
        }
    }
}
