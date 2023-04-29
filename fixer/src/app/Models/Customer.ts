import { Role } from "./Role";
import { JobOffer } from "./JobOffer";
import { Report } from "./Report";

export interface Customer { 

    id:number;
    firstname:number;
    lastname:String;
    email:String;
    password:String;
    role:Role;
    imagePath:String;
    City:String;
    tel:String;
    Offers:JobOffer[];
    Reports:Report[];
 }