import { Observable } from 'rxjs';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  addUser(formdata:User):Observable<any>
  {
   let url = "http://localhost:3000/save";
  // let url = "http://localhost/jis/add_customer.php";
    //console.log(formdata);
    //return this.http.post(url,formdata);
    const httpOptions= {headers: new HttpHeaders({'Content-Type':'application/json'})}; //changed here
  
    const json = JSON.stringify(formdata); //changed here
    return this.http.post(url,json,httpOptions);  //changed here
  }
}