using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Dto;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.Sales;

namespace API.Controllers
{
    public class SalesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Sales>>> GetSales()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Sales>> GetSale(int id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateSales(Sales sales)
        {
            return Ok(await Mediator.Send(new Create.Command {Sales = sales}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditSales(int id, SalesRequestDto sales)
        {
            sales.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{ Sales = sales}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSales(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{ Id = id}));
        }
    }
}