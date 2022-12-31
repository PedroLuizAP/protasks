using protasks.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace protask.Test.TestData.Task
{
    internal class ConcludeTask :BaseTaskTestData
    {
        public ConcludeTask()
        {
            Current.Tasks = new List<TaskModel>
            {
                new TaskModel() { Title = "NewTaskComplete", CreationDate = DateTime.Now, ConclusionDate = DateTime.Now, Id = 1, Priority = Priority.Low, Description = "Base Test" }
            };
        }
    }
}
