using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class CustomerController : BaseApiController
    {
        private readonly DataContext _context;

        public CustomerController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Customer>>> GetCustomers() 
        {
            return await _context.Customers.ToListAsync();
        }

        [HttpGet]
        public async Task<ActionResult<Customer>> GetCustomer(int id) 
        {
            return await _context.Customers.FindAsync(id);
        }
    }
}