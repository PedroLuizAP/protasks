using protasks.Domain.Entities;

namespace protask.Test.TestData.Task
{
    public class CompleteTask : BaseTaskTestData
    {
        public CompleteTask()
        {
            Current.Tasks = new List<TaskModel>
            {
                new TaskModel() { Title = "NewTaskComplete", CreationDate = DateTime.Now, Id = 1, Priority = Priority.Low, Description = "Base Test" }
            };
        }
    }
}
