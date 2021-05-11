using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Domain
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        [JsonIgnore]
        public ICollection<Sales> Sales { get; set; }
    }
}