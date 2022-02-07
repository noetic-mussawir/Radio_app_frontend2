import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SmsFilter } from './sms-filter';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:9000";
  nodeurl="http://localhost:3001/getRealTimeData";
  get=this.url+"/messages";
  getFilterdata=this.url+"/filterdata";
  constructor(private http:HttpClient) { }
//calling the server to generate token

generateToken(credentials:any){
  //token generate
  return this.http.post(`${this.url}/token`,credentials)
}
getNodeSms(){
  return this.http.get(`${this.nodeurl}`);
}
getAllSms()
{
  return this.http.get(`${this.get}`);
}



filter(shortcode:String, keyword:String, dateStart:String,  dateEnd:String,msisdn:String){
  let body = {
    "shortcode":shortcode,
    "keyword":keyword,
    "startdate":dateStart,
    "enddate":dateStart,
    "msisdn":msisdn

  }
  return this.http.post(`${this.getFilterdata}`,body)
}


//for login user

loginUser(token: any){
  localStorage.setItem("token",token)
  return true
}
//to check that is logged
isLoggedIn(){
let token=localStorage.getItem("token");
if(token==undefined ||token==''||token==null){
  return false;
}
else{
  return true;
}

//for logging out the user
}

logout(){
  localStorage.removeItem('token');
  return true;
}
 //for getting the token
getToken(){
  return localStorage.getItem("token");
}
}
