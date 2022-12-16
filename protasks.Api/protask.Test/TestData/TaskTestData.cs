using protasks.Domain.Entities;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace protask.Test.TestData
{
    public class TaskTestData  : IEnumerable<object[]>
    {
        public static TaskTestData Current { get; } = new TaskTestData();
        public List<TaskModel> Tasks { get; set; }

        public TaskTestData()
        {
            Tasks = new List<TaskModel>
            {
                new TaskModel {  Title="teste"},
                new TaskModel {  Title = "xUniTest"}
            };
        }

        public IEnumerator<object[]> GetEnumerator()
        {
            yield return new object[] { TaskTestData.Current.Tasks[0] };
        }

        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();

    }
}
