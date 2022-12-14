using Microsoft.EntityFrameworkCore;
using protasks.Data.Context;
using protasks.Domain.Entities;
using protasks.Domain.Interfaces.Repository;

namespace protasks.Data.Repository
{
    public class TaskRepository : BaseRepository, ITaskRepository
    {
        private readonly DataContext _context;

        public TaskRepository(DataContext context) : base(context) => _context = context;

        public async Task<TaskModel[]> GetAllAsync()
        {
            IQueryable<TaskModel> query = _context.Tasks;

            return await query.AsNoTracking().ToArrayAsync();
        }

        public async Task<TaskModel?> GetByIdAsync(long id)
        {
            IQueryable<TaskModel> query = _context.Tasks;

            return await query.AsNoTracking().SingleOrDefaultAsync(task => task.Id == id);
        }

        public async Task<TaskModel?> GetByTitleAsync(string title)
        {
            IQueryable<TaskModel> query = _context.Tasks;

            return await query.AsNoTracking().SingleOrDefaultAsync(task => task.Title == title);
        }
    }
}
