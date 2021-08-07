import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies: any[],searchTxt:any ): any {
    if(!movies) return [];
    return movies.filter((item)=>
    {
      
    
        if(item.title)
        {
          return item.title.toLowerCase().includes(searchTxt.toLowerCase()) 
        }
        else if (item.movieName)
  
        {
          return item.movieName.toLowerCase().includes(searchTxt.toLowerCase())
        }
        else
        {
          return item.name.toLowerCase().includes(searchTxt.toLowerCase())
        }
      }
    
    )
  }

}
