using Application.Dto;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Customer, Customer>();
            CreateMap<Product, Product>();
            CreateMap<Store, Store>();
            CreateMap<SalesRequestDto, Domain.Sales>();
        }
    }
}