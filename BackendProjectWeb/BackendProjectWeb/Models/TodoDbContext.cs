using Microsoft.EntityFrameworkCore;

namespace BackendProjectWeb.Models
{
    public class TodoDbContext : DbContext
    {
        public TodoDbContext(DbContextOptions<TodoDbContext> options) : base(options)
        {

        }

        public DbSet<Mytodo> todolists { get; set; }

    }
}
