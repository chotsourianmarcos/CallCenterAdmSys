using Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Logic
{
    public class PeopleLogic
    {
        public  bool ValidatePersonInfo(PersonItem person, bool isNewPerson)
        {
            //falta lo de Adress
            if (person.DNI < 1 || person.GenderID < 1 ||
                person.FirstNames == "" || person.SurNames == "" || person.BirthDate == null ||
                person.PhoneNumber == "" || person.Email == "" ||
                person.PreferedContactTypeID < 1 || person.InsertDate == null)
            {
                return false;
            }
            if (!isNewPerson)
            {
                if(person.PersonID < 1)
                {
                    return false;
                }
            }
            return true;
        }
    }
}
