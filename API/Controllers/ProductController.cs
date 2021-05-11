using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.Products;

namespace API.Controllers
{
    public class ProductController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateCustomer(Product product)
        {
            return Ok(await Mediator.Send(new Create.Command {Product = product}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditProduct(int id, Product product)
        {
            product.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{ Product = product}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{ Id = id}));
        }
    }
}