using protask.Test.TestData;
using protasks.Domain.Entities;
using System.Xml.Linq;

namespace protask.Test.Tests.Services
{
    public class TaskServiceTest : BaseTest
    {
        public static TaskModel RepeatedTask => new TaskModel() { Title = "TesteUnit" };

        public TaskTestData _data = new();

        [Theory]
        [ClassData(typeof(TaskTestData))]
        internal async Task GetAllAsync_Test_NotEmpty(TaskModel task)
        {

        }


    }
}
