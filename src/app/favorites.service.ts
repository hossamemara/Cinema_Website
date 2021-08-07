import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}  from '@angular/common/http'
import {Observable}  from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  myToken:any;
  media:any="";
medias:any[]=[];
myID:any;
mediaType:any="";
hoksha:any;
  addToFavoites(detailsData:any,mediaType:any):Observable<any>
  {
    
    console.log("favorite"+mediaType);
    this.hoksha=mediaType;

    this.medias.push(mediaType)
    
    localStorage.setItem(`favorites-media`,JSON.stringify(this.medias))
    if(localStorage.getItem(`favorites-media`)==null)
{
  this.medias=[];
  
}
else{
  this.medias=JSON.parse(localStorage.getItem(`favorites-media`)|| '{}');
}
      return this._httpResopnse.post('https://route-egypt-api.herokuapp.com/addToFavorites',detailsData)

    
  }
  getMedia()
  {


    console.log("My Media  "+this.medias)
    return this.medias
  }
  getZift()
  {
return this.hoksha;
  }
  getFavoites(id:any):Observable<any>
  {
  
    const myHeaders = new HttpHeaders({"token":this.myToken,"userID":id});
    this.myID=id;
    console.log(this.myID);

    return this._httpResopnse.get('https://route-egypt-api.herokuapp.com/getFavorites',{headers:myHeaders})
  }

  
  constructor(private _httpResopnse:HttpClient) {
    
    this.myToken=localStorage.getItem('token-login');
    

    
if(localStorage.getItem(`favorites-media`)!=null)
{
  this.medias=JSON.parse(localStorage.getItem(`favorites-media`)|| '{}');
  
}


   }}
