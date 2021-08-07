import { Component, OnInit, Input  } from '@angular/core';
import { TrendingcinemaService } from '../trendingcinema.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { FavoritesService } from '../favorites.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {
  favorites:any[]=[];
  searchText:any='';
  trendingTvShow:any[]=[];
  trendingMovies:any[]=[];
  loadingDone:any=false;
userInfo:any;
userId:any;
media:any[]=[];
zifta:any;

  constructor(private _trendindCinemaService: TrendingcinemaService,private _RegisterService:RegisterService,private _TrendingcinemaService:TrendingcinemaService, private spinner: NgxSpinnerService,private toastr: ToastrService,private _favoritesService:FavoritesService)
   { 
    
   }

 getFavoritesData()
 {
   

  this.spinner.show();

  this._favoritesService.getFavoites(this.userInfo._id).subscribe((data)=>
  {

   
    setTimeout(() => {
      this.spinner.hide();
      this.loadingDone=true;

    }, 500);
   
    this.favorites=data.Favorites;
  })
 }
  ngOnInit(): void {
  
    
    this._RegisterService.currentUser.subscribe((data)=>
    {
    this.userInfo=data;
   
    })
 
    this.getFavoritesData();
    this.media=this._favoritesService.getMedia()
    this.zifta=this._favoritesService.getZift();
    
   
  }

}
