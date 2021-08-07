import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import {Observable}  from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class TrendingcinemaService {

  constructor(private _httpResopnse:HttpClient) { }
  getTrending(mediatype:any):Observable<any>
  {

    return this._httpResopnse.get(`https://api.themoviedb.org/3/trending/${mediatype}/week?api_key=cc0a244b44ee3c894c650e4c85f45802`)
  }

  getTrendingDetails(mediatype:string,id:number):Observable<any>
  {

    return this._httpResopnse.get(`https://api.themoviedb.org/3/${mediatype}/${id}?api_key=cc0a244b44ee3c894c650e4c85f45802&language=en-US`)
  }
  getTrendingActorsDetails(id:number):Observable<any>
  {

    return this._httpResopnse.get(`https://api.themoviedb.org/3/person/${id}?api_key=cc0a244b44ee3c894c650e4c85f45802&language=en-US`)
  }
  getActorsMoviesCredits(id:number):Observable<any>
  {

    return this._httpResopnse.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=cc0a244b44ee3c894c650e4c85f45802&language=en-US`)
  }
}
