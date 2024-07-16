using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendProjectWeb.Models;

namespace BackendProjectWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MytodoesController : ControllerBase
    {
        private readonly TodoDbContext _context;

        public MytodoesController(TodoDbContext context)
        {
            _context = context;
        }

        // GET: api/Mytodoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Mytodo>>> Gettodolists()
        {
            return await _context.todolists.ToListAsync();
        }

        // GET: api/Mytodoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Mytodo>> GetMytodo(int id)
        {
            var mytodo = await _context.todolists.FindAsync(id);

            if (mytodo == null)
            {
                return NotFound();
            }

            return mytodo;
        }



        [HttpGet("bytitle/{titre}")]
        public async Task<ActionResult<Mytodo>> GetMytodoBytitre(string titre)
        {
            var mytodo = await _context.todolists.FirstOrDefaultAsync(m => m.Titre.Equals(titre));

            if (mytodo == null)
            {
                return NotFound();
            }

            return mytodo;
        }



        // PUT: api/Mytodoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMytodo(int id, Mytodo mytodo)
        {
            if (id != mytodo.Id)
            {
                return BadRequest();
            }

            _context.Entry(mytodo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MytodoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Mytodoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<IEnumerable<Mytodo>>> PostMytodo(Mytodo mytodo)
        {
            _context.todolists.Add(mytodo);
            await _context.SaveChangesAsync();

            return await _context.todolists.ToListAsync();
        }

        // DELETE: api/Mytodoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMytodo(int id)
        {
            var mytodo = await _context.todolists.FindAsync(id);
            if (mytodo == null)
            {
                return NotFound();
            }

            _context.todolists.Remove(mytodo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MytodoExists(int id)
        {
            return _context.todolists.Any(e => e.Id == id);
        }
    }
}
