import { Component, OnInit } from '@angular/core';
import { TrendingcinemaService } from '../trendingcinema.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../register.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  p: number = 1;
  searchText:any=''
  collection: any[]=[] ;  
  loadingDone:any=false;

  trendingMovies: any[] = [];
  medias: any[] = []
  userInfo:any;
  constructor( private _RegisterService: RegisterService,private toastr: ToastrService,private _tendingMovies: TrendingcinemaService, private spinner: NgxSpinnerService,private _favoritesService: FavoritesService) { }
  getTrendingMovies() {
    this.spinner.show();
    this._tendingMovies.getTrending('movie').subscribe((moviesResponse) => {

      setTimeout(() => {

        this.spinner.hide();
        this.loadingDone=true;

      }, 500);

      
      
      this.trendingMovies = moviesResponse.results.reverse().filter((item: any) => {
        return item.media_type == 'movie' && item.poster_path != null;
      })
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
  ;
{
  
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
    this.getTrendingMovies()

    
    this._RegisterService.currentUser.subscribe((data) => {
      this.userInfo = data;
    })
  }

}
