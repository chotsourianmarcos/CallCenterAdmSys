using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.ClientInfo
{
    public class FinancialMovItem
    {
        public FinancialMovItem()
        {

        }
        public long MovementID { get; set; }
        public long MovementTypeID { get; set; }
        public long ClientID { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string FilesRoute { get; set; }
        public string Observations { get; set; }
        public DateTime InsertDate { get; set; }
    }
}
