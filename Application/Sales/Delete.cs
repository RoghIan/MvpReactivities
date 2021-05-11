using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Sales
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
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
                var sales = await _context.Sales.FindAsync(request.Id);

                _context.Remove(sales);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}