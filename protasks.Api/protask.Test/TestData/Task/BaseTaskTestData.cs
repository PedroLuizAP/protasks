using protasks.Domain.Entities;
using System.Collections;

namespace protask.Test.TestData.Task
{
    public class BaseTaskTestData : IEnumerable<object[]>
    {
        public static BaseTaskTestData Current { get; set; } = new();
        public List<TaskModel> Tasks { get; set; } = new();
        public  BaseTaskTestData() { }

        public IEnumerator<object[]> GetEnumerator()
        {
            foreach (var task in Current.Tasks) yield return new object[] { task };
        }

        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
}
