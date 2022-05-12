using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    class CallAuditItem
    {
        public CallAuditItem()
        {

        }
        public long ContactAuditedID { get; set; }
        public long AuditorID { get; set; }
        public bool? Inquiries { get; set; }
        public bool? Rebates { get; set; }
        public bool? CompleteInfo { get; set; }
        public bool? PriceIndicated { get; set; }
        public long? GeneralHandlingID { get; set; }
        public long? VoiceModeID { get; set; } 
        public string Observations { get; set; }
        public long? CalificationID { get; set; }
        public DateTime Date { get; set; }
        public DateTime InsertDate { get; set; }
    }
}
