using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities
{
    public class AdressItem
    {
        public AdressItem()
        {

        }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public long AdressID { get; set; }
        public long ProvinceID { get; set; }
        public long CityID { get; set; }
        public string Street { get; set; }
        public long StreetNumber { get; set; }
        public string DoorNumber { get; set; }
        public DateTime UpdateDate { get; set; }
        public bool IsMainAdress { get; set; }
        public long PersonForeignKey { get; set; }
    }
}
