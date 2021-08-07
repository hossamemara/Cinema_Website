import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrendingcinemaService } from '../trendingcinema.service';

@Component({
  selector: 'app-actordetails',
  templateUrl: './actordetails.component.html',
  styleUrls: ['./actordetails.component.scss']
})
export class ActordetailsComponent implements OnInit {
  actorMovies:any;
  p: number = 1;
  constructor(private spinner: NgxSpinnerService,private _trendingCinemaService:TrendingcinemaService,private _ActivatedRoute:ActivatedRoute) { }
  id:any='';
  trendingDetails:any='';
  ngOnInit(): void {
    this.spinner.show();

    this.id=this._ActivatedRoute.snapshot.paramMap.get('id');
    
    this._trendingCinemaService.getActorsMoviesCredits(this.id).subscribe((data)=>
    {
      this.actorMovies = data.cast.filter((item: any) => {
        return item.backdrop_path != null;
      })
      setTimeout(() => {
        this.spinner.hide();
      }, 500);
     
      // this.actorMovies=data.cast;
    })
 this._trendingCinemaService.getTrendingActorsDetails(this.id).subscribe((trendingActorsDetailsData)=>
 {
this.trendingDetails=trendingActorsDetailsData;



  
 })
  }

}
