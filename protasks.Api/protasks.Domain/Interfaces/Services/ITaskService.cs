using protasks.Domain.Entities;

namespace protasks.Domain.Interfaces.Services
{
    public interface ITaskService
    {
        Task<TaskModel> AddTask(TaskModel task);
        Task<TaskModel> UpdateTask(TaskModel task);
        Task<bool> DeleteTask(long idTask);
        Task<bool> ConcludeTask(TaskModel task);
        Task<TaskModel[]> GetAllTasksAsync();
        Task<TaskModel> GetTaskByIdAsync(long idTask);
    }
}
