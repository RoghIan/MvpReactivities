using System;

namespace Domain
{
    public class Sales
    {
        public int Id { get; set; }
        public DateTime DateSold { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
        public int StoreId { get; set; }
        public Store Store { get; set; }
    }
}