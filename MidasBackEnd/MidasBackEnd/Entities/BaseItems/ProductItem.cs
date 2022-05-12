using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    class ProductItem
    {
        public ProductItem()
        {

        }
        public long ProductID { get; set; }
        public decimal CostPesos { get; set; }
        public DateTime InsertDate { get; set; }
    }
}
