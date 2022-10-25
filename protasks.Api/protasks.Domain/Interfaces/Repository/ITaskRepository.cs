using protasks.Domain.Entities;

namespace protasks.Domain.Interfaces.Repository
{
    public interface ITaskRepository
    {
        Task<TaskModel[]> GetAllAsync();
        Task<TaskModel> GetByIdAsync();
        Task<TaskModel> GetByTitleAsync();
    }
}
