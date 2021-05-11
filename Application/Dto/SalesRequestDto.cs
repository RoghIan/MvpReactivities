using System;

namespace Application.Dto
{
    public class SalesRequestDto
    {
        public int Id { get; set; }
        public DateTime DateSold { get; set; }
        public int ProductId { get; set; }
        public int CustomerId { get; set; }
        public int StoreId { get; set; }
    }
}