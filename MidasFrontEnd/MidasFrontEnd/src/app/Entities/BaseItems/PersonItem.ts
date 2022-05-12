import { AdressItem } from "./AdressItem";
export class PersonItem{
    PersonID : number;
    DNI : number;
    GenderID : number;
    FirstNames : string;
    SurNames : string;
    BirthDate : Date;
    PhoneNumber : string;
    PhoneNumber2 : string;
    Email : string;
    Email2 : string;
    Adress : AdressItem;
    PreferedContactTypeID : number;
    Observations : string;
    FilesRoute : string;
    InsertDate : Date;
}