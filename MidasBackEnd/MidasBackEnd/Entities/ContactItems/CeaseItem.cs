using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.ContactItems
{
    public class CeaseItem : ContactItem
    {
        public CeaseItem()
        {

        }
        public List<long> CeaseReasonsIDs { get; set; }
        public List<long> CeasedProductsIDs { get; set; }
        public long? EffectiveCeaseID { get; set; }
        public DateTime? EffectiveCeaseDate { get; set; }
    }
}
