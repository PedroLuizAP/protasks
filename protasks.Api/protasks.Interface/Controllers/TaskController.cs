using Microsoft.AspNetCore.Mvc;
using protasks.Domain.Entities;
using protasks.Domain.Interfaces.Services;

namespace protasks.Interface.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly ITaskService _taskService;
        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var task = await _taskService.GetTaskByIdAsync(id);

            if (task == null) return NoContent();

            return Ok(task);
        }

        [HttpGet("All")]
        public async Task<IActionResult> GetAllAsync()
        {
            var tasks = await _taskService.GetAllTasksAsync();

            if (tasks == null) return NoContent();

            return Ok(tasks);
        }
        [HttpPut("{id}")]

        public async Task<IActionResult> Put(int id, TaskModel task)
        {
            if (task.Id != id) Conflict("please submit a valid Task");

            var newTask = await _taskService.UpdateTask(task);

            return Ok(newTask);
        }
        [HttpPost]

        public async Task<IActionResult> PostAsync(TaskModel task)
        {
            var newTask = await _taskService.AddTask(task);

            return Created($"/{task.Id}", newTask);
        }
        [HttpDelete("{id}")]

        public async Task<IActionResult> Delete(int id)
        {
            if (await _taskService.DeleteTask(id)) return Accepted(); 
            
            return UnprocessableEntity();
        }
    }
}