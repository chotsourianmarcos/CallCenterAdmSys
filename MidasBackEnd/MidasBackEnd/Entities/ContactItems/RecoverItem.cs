using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.ContactItems
{
    public class RecoverItem : ContactItem
    {
        public RecoverItem()
        {

        }
        public List<long> RecoveredProducts { get; set; }
    }
}
