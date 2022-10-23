using protasks.Interface.Data;

namespace protasks.Interface.Models
{
    public class TaskModel
    {
        public long Id { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }
        public Priority Priority { get; set; }
    }
}
