using Microsoft.AspNetCore.Mvc;
using protasks.Interface.Data;
using protasks.Interface.Models;
using System.Threading.Tasks;

namespace protasks.Interface.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        private DataContext _context { get; }

        public TaskController(DataContext context)
        {
            _context = context;
        }
        [HttpGet("{id}")]
        public TaskModel? Get(int id)
        {
            return _context.Tasks.FirstOrDefault(t => t.Id == id);
        }
        
        [HttpGet("All")]
        public IEnumerable<TaskModel> GetAll()
        {
            return _context.Tasks;
        }
        [HttpPut("{id}")]

        public TaskModel? Put(int id, TaskModel task)
        {
            if (task.Id != id) throw new Exception("Id Error");

            _context.Update(task);

            if (_context.SaveChanges() == 0) throw new Exception("Save Error");

            return _context.Tasks.FirstOrDefault(t => t.Id == id);
        }
        [HttpPost]

        public IEnumerable<TaskModel> Post(TaskModel task)
        {
            _context.Tasks.Add(task);

            if (_context.SaveChanges() == 0) throw new Exception("Save Error");

            return _context.Tasks;

        }
        [HttpDelete("{id}")]

        public bool Delete(int id)
        {
            var deleteTask = _context.Tasks.FirstOrDefault(t => t.Id == id);

            if (deleteTask == null) throw new Exception("Delete Error");

            _context.Remove(deleteTask);

            return _context.SaveChanges() > 0;
        }
    }
}