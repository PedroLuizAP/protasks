using protasks.Domain.Entities;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace protask.Test.TestData
{
    public class TaskTestData
    {
        public static TaskTestData Current { get; } = new TaskTestData();
        public List<TaskModel> Choices { get; set; }

        public TaskTestData()
        {
            Choices = new List<TaskModel>
            {
                new TaskModel {  Title="teste"},
                new TaskModel {  Title = "xUniTest"}
            };
        }

    }
}
