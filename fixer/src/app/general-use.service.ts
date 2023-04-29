import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './Models/Customer';
import { Observable, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { Salle7 } from './Models/Salle7';

const host: String = "http://localhost:8080/"
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })}

@Injectable({
  providedIn: 'root'
})



export class GeneralUseService {


  constructor(private http: HttpClient) { }

  //crude Client

  public getCustomers(page: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(host + "clients?page=" + page + "&size=20");
  }
  public getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(host + "clients/" + id,httpOptions);
  }
  public getCustomerByEmail(id: number): Observable<Customer> {
    return this.http.get<Customer>(host + "/clients/search/findByEmail",httpOptions);
  }
  public addCustomer(customer: FormData): Observable<void> {
    return this.http.post<void>(host + "clients", customer,httpOptions);
  }
  public modCustomer(customer: FormData, email: string, file:FormData): Observable<any> {
    console.log(host + "api/client/" + email,httpOptions)
    console.log(customer)
    this.http.post<void>(host+ "api/client/uploadImg",file,{observe: 'response'}).subscribe((data:any)=>
      console.log(data)
    )
    return this.http.put<any>(host + "api/client/" + email, customer,httpOptions).pipe(catchError(error => {
      if (error.status === 404) {
        Swal.fire(
          "Email not Found"
        )
      }
      return throwError(error);
    }
    ))
  };
  public delCustomer(id: number): Observable<void> {
    return this.http.delete<void>(host + "api/client/" + id,httpOptions);
  }

  //Crud Salle7

  public getSalle7(page: number): Observable<Salle7[]> {
    return this.http.get<Salle7[]>(host + "salle7s?page=" + page + "&size=20",httpOptions)
  }
  public getSalle7ById(id: number): Observable<Customer> {
    return this.http.get<Customer>(host + "salle7s/" + id,httpOptions);
  }
  public getTest():Observable<string>{
    return this.http.get<string>(host+"api/test");  
  }
  public getSalle7ByEmail(id: string): Observable<Customer> {
    return this.http.get<Customer>(host + "salle7s/search/?email="+id,httpOptions);
  }
  public addSalle7(customer: FormData): Observable<void> {
    return this.http.post<void>(host + "salle7s", customer,httpOptions);
  }
  public modSalle7(customer: FormData, email: string,file:FormData): Observable<void> {
    console.log(host + "api/salle7/" + email,httpOptions)
    console.log(customer)
    this.http.post<void>(host+ "api/client/uploadImg",file,{observe: 'response'}).subscribe((data:any)=>
      console.log(data)
    )
    return this.http.put<any>(host + "api/salle7/" + email, customer,httpOptions).pipe(catchError(error => {
      if (error.status === 404) {
        Swal.fire(
          "Email not Found"
        )
      }
      return throwError(error);
    }
    ))
  }
  public delSalle7(id: number): Observable<void> {
    return this.http.delete<void>(host + "salle7/" + id,httpOptions);
  }

  //CRUD Offers
  public getOffers(page: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(host + "jobOffers?page=" + page + "&size=20",httpOptions);
  }
  public getOfferById(id: number): Observable<Customer> {
    return this.http.get<Customer>(host + "jobOffers/" + id,httpOptions);
  }
  public getOfferBySalle7(id: number): Observable<Customer> {
    return this.http.get<Customer>(host + "/salle7s/search/findByEmail",httpOptions);
  }
  public addOffer(customer: FormData): Observable<void> {
    return this.http.post<void>(host + "salle7s", customer,httpOptions);
  }
  public modOffer(customer: FormData, email: string): Observable<void> {
    return this.http.put<void>(host + "api/salle7/" + email, customer,httpOptions);
  }
  public delOffer(id: number): Observable<void> {
    return this.http.delete<void>(host + "salle7/" + id,httpOptions);
  }
}
