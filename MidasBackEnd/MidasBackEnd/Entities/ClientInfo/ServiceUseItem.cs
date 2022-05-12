using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.ClientInfo
{
    public class ServiceUseItem
    {
        public ServiceUseItem()
        {

        }
        public long ServiceUseID {get;set;}
        public decimal UseAmount { get; set; }
        public string Observations { get; set; }
        public string FilesRoute { get; set; }
        public DateTime InsertDate { get; set; }
    }
}
