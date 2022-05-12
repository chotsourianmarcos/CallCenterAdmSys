using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.PersonItems
{
    public class OperatorItem : PersonItem
    {
        public OperatorItem()
        {

        }
        public DateTime ContractDate { get; set; }
        public DateTime? CeaseDate { get; set; }
    }
}
