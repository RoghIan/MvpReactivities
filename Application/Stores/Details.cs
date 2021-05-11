using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Stores
{
    public class Details
    {
        public class Query : IRequest<Store>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Store>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Store> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Stores.FindAsync(request.Id);
            }
        }
    }
}