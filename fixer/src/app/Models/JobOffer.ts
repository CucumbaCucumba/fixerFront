import { Customer } from "./Customer";
import { Salle7 } from "./Salle7";

export interface JobOffer{
    id:number;

    nom:String;
    Description:String;
    Address:String;
    Price:String;
    Customer:Customer;
    Salle7:Salle7;
}