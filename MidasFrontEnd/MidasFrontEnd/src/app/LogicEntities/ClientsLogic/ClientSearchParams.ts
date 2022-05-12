import { ClientItem } from "../../Entities/PersonItems/ClientItem";
export class ClientSearchParams{
        PersonID : number;
        ClientID : number;
        DNI : number;
        FirstNames : string;
        SurNames : string;
        Email : string;
        PhoneNumber : string;
        BirthDate : Date;
        GenderID : number;
        PreferedContactTypeID : number;
        InsertDate : Date;
        BirthDateFrom : Date;
        BirthDateTo : Date;
        InsertDateFrom : Date;
        InsertDateTo : Date;
        FinancialBalanceFrom : number;
        FinancialBalanceTo : number;
        Active: boolean;
}