using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.PersonItems
{
    public class ClientItem : PersonItem
    {
        public ClientItem(){

        }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public long ClientID { get; set; }
        public long? ExcelID { get; set; }
        public decimal FinancialBalance { get; set; }
        public string ActiveServicesList { get; set; }
        public bool Active
        {
            get
            {
                return !String.IsNullOrEmpty(ActiveServicesList);
            }
            set { }
        }
    }
}
