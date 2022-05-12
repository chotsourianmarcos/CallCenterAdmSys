import { PersonItem } from "../BaseItems/PersonItem";
export class ClientItem extends PersonItem{
    ClientID : number;
    ExcelID : number;
    FinancialBalance : number;
    ActiveServices : number[];
    Active : boolean;
}