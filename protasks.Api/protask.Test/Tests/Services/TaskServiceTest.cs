using protask.Test.TestData.Task;
using protasks.Domain.Entities;
using System.Xml.Linq;

namespace protask.Test.Tests.Services
{
    public class TaskServiceTest : BaseTest
    {
        public static TaskModel RepeatedTask => new TaskModel() { Title = "TesteUnit" };

        public BaseTaskTestData _data = new();

        [Theory]
        [ClassData(typeof(BaseTaskTestData))]
        internal async Task GetAllAsync_Test_NotEmpty(TaskModel task)
        {

        }


    }
}
