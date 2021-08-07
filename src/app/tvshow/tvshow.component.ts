import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrendingcinemaService } from '../trendingcinema.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../register.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {
  userInfo:any;
  p: number = 1;
  searchText:any='';
  loadingDone:any=false;
  medias: any[] = [];
  trendingTvShow: any[] = [];
  constructor(private _favoritesService: FavoritesService, private _RegisterService: RegisterService,private toastr: ToastrService,private _TrendingcinemaService: TrendingcinemaService, private spinner: NgxSpinnerService) { }

  getTvShow() {
    this.spinner.show();
    this._TrendingcinemaService.getTrending('tv').subscribe((tvReponse) => {
      
      this.trendingTvShow = tvReponse.results.filter((item: any) => {
        return item.media_type == 'tv' && item.poster_path != null;
      })
      // this.trendingTvShow = tvReponse.results
      setTimeout(() => {

        this.spinner.hide();
        this.loadingDone=true;

      }, 500);
      
    })

  }
  addFavorites(movieName: any, movieID: any, movieImg: any,media_type:any) {
    let detailsData: any = {
      'movieName': movieName,
      'movieID': movieID,
      "userID": this.userInfo._id,
      'imgUrl': 'https://image.tmdb.org/t/p/original/' + movieImg,

      'token': localStorage.getItem('token-login')

    }
   

    this._favoritesService.addToFavoites(detailsData,media_type).subscribe((data) => {



    })
    {

    }
  }
  addSuccessToaster(title:any)
  {
    this.toastr.success('Successflly added to Favorites',`${title}`, {
      timeOut: 1000,
    });
  }
  ngOnInit(): void {
    
    this.getTvShow()
    
    this._RegisterService.currentUser.subscribe((data) => {
      this.userInfo = data;
    })
 
  }
}
