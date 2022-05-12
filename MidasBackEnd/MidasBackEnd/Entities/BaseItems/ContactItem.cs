using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class ContactItem
    {
        public ContactItem()
        {

        }
        public long ContactID { get; set; }
        public long ReasonID { get; set; }
        public long TypeID { get; set; }
        public DateTime ContactDate { get; set; }
        public long OperatorID {get;set;}
        public long? SecondsDuration { get; set; }
        public string Observations { get; set; }
        public string FilesRoute { get; set; }
        public DateTime InsertDate { get; set; }
    }
}
