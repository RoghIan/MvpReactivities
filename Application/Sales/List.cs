using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Sales
{
    public class List
    {
        public class Query : IRequest<List<Domain.Sales>> { }

        public class Handler : IRequestHandler<Query, List<Domain.Sales>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Domain.Sales>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Sales.Include(x => x.Customer).Include(x => x.Store).Include(x => x.Product).ToListAsync();
            }
        }
    }
}