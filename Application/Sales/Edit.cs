using System.Threading;
using System.Threading.Tasks;
using Application.Dto;
using AutoMapper;
using MediatR;
using Persistence;

namespace Application.Sales
{
    public class Edit
    {
        public class Command : IRequest
        {
            public SalesRequestDto Sales { get; set; }
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
                var sales = await _context.Sales.FindAsync(request.Sales.Id);

                _mapper.Map(request.Sales, sales);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}