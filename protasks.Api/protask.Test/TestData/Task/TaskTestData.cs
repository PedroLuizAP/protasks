using protasks.Domain.Entities;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace protask.Test.TestData.Task
{
    public class BaseTaskTestData : IEnumerable<object[]>
    {
        public static BaseTaskTestData Current { get; } = new BaseTaskTestData();
        public List<TaskModel> Tasks { get; set; }

        public BaseTaskTestData()
        {
            //Tasks = new List<TaskModel>
            //{
            //    new TaskModel {  Title="teste"},
            //    new TaskModel {  Title = "xUniTest"}
            //};
        }

        public IEnumerator<object[]> GetEnumerator()
        {
            yield return new object[] { Current.Tasks[0] };
        }

        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
}
