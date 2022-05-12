using Entities.PersonItems;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities
{
    public class PersonItem
    {
        public PersonItem()
        {

        }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public long PersonID { get; set; }
        public long DNI { get; set; }
        public long GenderID { get; set; }
        public string FirstNames { get; set; }
        public string SurNames { get; set; }
        public DateTime BirthDate { get; set; }
        public string PhoneNumber { get; set; }
        public string PhoneNumber2 { get; set; }
        public string Email { get; set; }
        public string Email2 { get; set; }
        public virtual AdressItem Adress { get; set; }
        public long PreferedContactTypeID { get; set; }
        public string Observations { get; set; }
        public string FilesRoute { get; set; }
        public DateTime InsertDate { get; set; }
    }
}
