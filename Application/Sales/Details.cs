using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Sales
{
    public class Details
    {
        public class Query : IRequest<Domain.Sales>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Domain.Sales>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Domain.Sales> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Sales.Include(x => x.Customer).Include(x => x.Store).Include(x => x.Product).FirstOrDefaultAsync(x => x.Id == request.Id);
            }
        }
    }
}