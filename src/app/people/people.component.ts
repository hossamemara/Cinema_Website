import { Component, OnInit } from '@angular/core';
import { TrendingcinemaService } from '../trendingcinema.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  p: number = 1;
  searchText:any='';
  loadingDone:any=false;
  peoples:any[]=[];
  constructor(private _TrendingcinemaService:TrendingcinemaService, private spinner: NgxSpinnerService) { }
getPeople()
{
  this.spinner.show();

  this._TrendingcinemaService.getTrending('person').subscribe((peopleResponse)=>

  {
    setTimeout(() => {

      this.spinner.hide();
      this.loadingDone=true;

    }, 500);
    this.peoples = peopleResponse.results.filter((item: any) => {
      return item.profile_path != null;
    })
    // this.peoples=peopleResponse.results
    

  })
}
  ngOnInit(): void {
   this.getPeople();


   }

}
