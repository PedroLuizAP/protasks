using protasks.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace protask.Test.TestData.Task
{
    public class TaskWithoutId : BaseTaskTestData
    {
        public TaskWithoutId()
        {
            Current.Tasks = new List<TaskModel>
            {
                new TaskModel() { Title = "No Id", CreationDate = DateTime.Now, Priority = Priority.Low, Description = "Base Test" }
            };
        }
    }
}
