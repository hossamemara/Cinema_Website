import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import {Observable,BehaviorSubject}  from 'rxjs'
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


currentUser=new BehaviorSubject(null);
saveCurrentUser()
{
  let token:any=localStorage.getItem('token-login')
  this.currentUser.next(jwtDecode(token));
  let x=this.currentUser.value 
  console.log(x)

}
  constructor(private _httpResopnse:HttpClient,private _Router:Router) {
    if(localStorage.getItem('token-login')!=null)
    {
      this.saveCurrentUser();
    }
   }
signUp(registerData:any):Observable<any>
{
  return this._httpResopnse.post('https://route-egypt-api.herokuapp.com/signup',registerData)
}
signIn(loginData:any):Observable<any>
{

  return this._httpResopnse.post('https://route-egypt-api.herokuapp.com/signin',loginData)
}
isLogOut() {
  localStorage.removeItem('token-login')
  this.currentUser.next(null);
  this._Router.navigateByUrl('/login')

}
}
