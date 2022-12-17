using protasks.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace protask.Test.TestData.Task
{
    public class TitleError : BaseTaskTestData
    {
        public TitleError()
        {
            Current.Tasks = new List<TaskModel>
            {
                new TaskModel() { Title = "TesteUnit" }
            };
        }
    }
}
