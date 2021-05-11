using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Stores
{
    public class Create
    {
        public class Command : IRequest
        {
            public Store Store { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Stores.Add(request.Store);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}