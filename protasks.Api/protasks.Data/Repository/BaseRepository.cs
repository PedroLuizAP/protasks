using protasks.Data.Context;
using protasks.Domain.Interfaces.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace protasks.Data.Repository
{
    public class BaseRepository : IBaseRepository
    {
        private readonly DataContext _context;
        public BaseRepository(DataContext context) => _context = context;
        public void Add<T>(T entity) where T : class => _context.Add(entity);
        public void Delete<T>(T entity) where T : class => _context.Remove(entity);
        public void DeleteRange<T>(T entity) where T : class => _context.RemoveRange(entity);
        public void Update<T>(T entity) where T : class => _context.Update(entity);
        public async Task<bool> SaveChangesAsync() => await _context.SaveChangesAsync() > 0;
    }
}
