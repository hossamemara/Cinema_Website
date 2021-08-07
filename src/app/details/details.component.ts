import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrendingcinemaService } from '../trendingcinema.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
mediaType:any='';
id:any='';
trendingDetails:any='';
genres:any='';
  constructor(private spinner: NgxSpinnerService,private _trendingCinemaService:TrendingcinemaService,private _ActivatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.spinner.show();

   this.mediaType=this._ActivatedRoute.snapshot.paramMap.get('mediaType');
   this.id=this._ActivatedRoute.snapshot.paramMap.get('id');
  

this._trendingCinemaService.getTrendingDetails(this.mediaType,this.id).subscribe((trendingDetailsData)=>
{
  setTimeout(() => {
    this.spinner.hide();
  }, 500);
this.trendingDetails=trendingDetailsData;
this.genres=trendingDetailsData.genres;

})


  }

}
