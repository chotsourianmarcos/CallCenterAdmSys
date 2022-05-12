using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.ClientInfo
{
    public class ServiceAvailability
    {
        public ServiceAvailability()
        {

        }
        public long ClientID { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
//a lo mejor esta tabla no hay que crearla aparte, se genera con otras. verlo.
