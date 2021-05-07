using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.Customers;

namespace API.Controllers
{
    public class CustomerController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Customer>>> GetCustomers()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> GetCustomer(int id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateCustomer(Customer customer)
        {
            return Ok(await Mediator.Send(new Create.Command {Customer = customer}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditCustomer(int id, Customer customer)
        {
            customer.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{ Customer = customer}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{ Id = id}));
        }
    }
}