using protask.Test.TestData;
using protasks.Domain.Entities;
using System.Collections;

namespace protask.Test.Tests.Services
{
    public class TaskServiceTest : BaseTest
    {
        public static TaskModel RepeatedTask => new TaskModel() { Title = "TesteUnit" };

        [Theory]
        [MemberData(nameof(GetUserChoiceTestData))]
        internal async Task GetAllAsync_Test_NotEmpty(TaskModel task)
        {

        }

        public static IEnumerable<object[]> GetUserChoiceTestData()
        {
            yield return new object[] { TaskTestData.Current.Choices[0]};
        }
    }
}
