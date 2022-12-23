using protasks.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace protask.Test.TestData.Task
{
    public class DatabaseTask : BaseTaskTestData
    {
        public DatabaseTask()
        {
            Current.Tasks = new List<TaskModel>
            {
                new TaskModel { Id = 2, Title = "Conclude", Description = "Conclude", Priority = Priority.Low }
            };
        }
    }
}
