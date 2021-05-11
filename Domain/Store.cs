using System.Collections;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Domain
{
    public class Store
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        [JsonIgnore]
        public ICollection<Sales> Sales { get; set; }
    }
}