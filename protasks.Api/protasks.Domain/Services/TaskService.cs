﻿using protasks.Domain.Entities;
using protasks.Domain.Interfaces.Repository;
using protasks.Domain.Interfaces.Services;
using protasks.Domain.Resources;
using System.Threading.Tasks;

namespace protasks.Domain.Services
{
    public class TaskService : ITaskService
    {
        private ITaskRepository _taskRepository { get; }
        public TaskService(ITaskRepository taskRepository) => _taskRepository = taskRepository;

        public async Task<TaskModel> AddTask(TaskModel task)
        {
            if (await _taskRepository.GetByTitleAsync(task.Title) != null) throw new Exception(Messages.RepeatedTitle);

            if (await _taskRepository.GetByIdAsync(task.Id) == null) throw new Exception(Messages.ExistingTask);

            _taskRepository.Add(task);

            if (await _taskRepository.SaveChangesAsync()) return task;

            throw new Exception(Messages.DatabaseError);
        }
        public async Task<bool> ConcludeTask(long id)
        {
            var task = await _taskRepository.GetByIdAsync(id);

            if (task == null) throw new Exception(Messages.InvalidTask);

            task.Conclude();

            _taskRepository.Update(task!);

            return await _taskRepository.SaveChangesAsync();
        }

        public async Task<bool> DeleteTask(long idTask)
        {
            var task = await _taskRepository.GetByIdAsync(idTask);

            if (task == null) throw new Exception(Messages.NotExistTask);

            _taskRepository.Delete(task);

            return await _taskRepository.SaveChangesAsync();
        }

        public async Task<TaskModel[]> GetAllTasksAsync()
        {
            try
            {
                return await _taskRepository.GetAllAsync();
            }
            catch (Exception ex)
            {
                throw new Exception($"API error {ex.Message}");
            }
        }

        public async Task<TaskModel?> GetTaskByIdAsync(long idTask)
        {
            try
            {
                return await _taskRepository.GetByIdAsync(idTask);
            }
            catch (Exception ex)
            {
                throw new Exception($"API error {ex.Message}");
            }
        }

        public async Task<TaskModel> UpdateTask(TaskModel task)
        {
            if (task.ConclusionDate != null) throw new Exception(Messages.UpdateCompletedTask);

            if (await _taskRepository.GetByIdAsync(task.Id) == null) throw new Exception(Messages.NotExistTask);

            _taskRepository.Update(task);

            if (await _taskRepository.SaveChangesAsync()) return task;

            throw new Exception(Messages.DatabaseError);
        }
    }
}
