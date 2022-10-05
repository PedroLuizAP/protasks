using Microsoft.AspNetCore.Mvc;
using protasks.Interface.Models;
namespace protasks.Interface.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        [HttpGet("{id}")]
        public TaskModel Get(int id)
        {
            return new();
        }
        [HttpPut("{id}")]

        public string Put(int id, TaskModel task)
        {
            return $"My api PUT - {id}";

        }
        [HttpPost("{id}")]

        public string Post(int id)
        {
            return $"My api POST - {id}";

        }
        [HttpDelete("{id}")]

        public string Delete(int id)
        {
            return $"My api DELETE - {id}";

        }
    }
}