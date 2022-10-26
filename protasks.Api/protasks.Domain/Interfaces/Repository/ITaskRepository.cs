using protasks.Domain.Entities;

namespace protasks.Domain.Interfaces.Repository
{
    public interface ITaskRepository : IGeneralRepository
    {
        Task<TaskModel[]> GetAllAsync();
        Task<TaskModel> GetByIdAsync(long id);
        Task<TaskModel> GetByTitleAsync(string title);
    }
}
