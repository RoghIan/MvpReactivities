using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.Stores;

namespace API.Controllers
{
    public class StoreController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Store>>> GetStores()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Store>> GetStore(int id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateStore(Store store)
        {
            return Ok(await Mediator.Send(new Create.Command {Store = store}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditStore(int id, Store store)
        {
            store.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{ Store = store}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStore(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{ Id = id}));
        }
    }
}