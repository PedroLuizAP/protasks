namespace protasks.Domain.Entities
{
    public class TaskModel
    {
        public long Id { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? ConclusionDate { get; set; }
        public DateTime CreationDate { get; set; }
        public Priority Priority { get; set; }

        public TaskModel() => CreationDate = DateTime.Now;

        public TaskModel(long id, string title, string description) : this()
        {
            Id = id;
            title = Title;
            Description = description;
        }

        public void Conclude()
        {
            if (ConclusionDate != null) throw new Exception($"This task has already been completed on {ConclusionDate?.ToString("dd/MM/yyyy hh:mm")}");

            ConclusionDate = DateTime.Now;
        }
    }
}
