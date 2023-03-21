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
        public static BaseTaskTestData Current { get; set; } = new();
        public List<TaskModel> Tasks { get; set; }
        public BaseTaskTestData() { }

        public IEnumerator<object[]> GetEnumerator()
        {
            foreach (var task in Current.Tasks) yield return new object[] { task };
        }

        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
}
