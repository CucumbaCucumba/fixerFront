import { Salle7 } from "./Salle7";
import { Customer } from "./Customer";


export interface Report{
    id:number;
    Customer:Customer;
    salle7:Salle7;
    Reason:String;
    Description:String;
    ImgPath:String;
}