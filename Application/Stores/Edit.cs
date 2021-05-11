using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Stores
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Store Store { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var store = await _context.Stores.FindAsync(request.Store.Id);

                _mapper.Map(request.Store, store);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}