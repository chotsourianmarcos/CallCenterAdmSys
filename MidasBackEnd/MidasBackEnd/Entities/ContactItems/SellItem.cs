using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.ContactItems
{
    public class SellItem : ContactItem
    {
        public SellItem()
        {

        }
        public long SellerID { get; set; }
        public long CardTypeID { get;set; }
        public long CardNumber { get; set; }
        public long CardService { get; set; }
        public long MonthExpire { get; set; }
        public long YearExpire { get; set; }
        public string BankEntity { get; set; }
        public long ControlID { get; set; }
        public long DestinyID { get; set; }
        public List<long> SellServices { get; set; }
    }
}
