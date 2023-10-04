import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {
  title = 'Search';
  searchText:any;
  weather:any;
  temp: any;
  constructor(public weatherapi: WeatherApiService) { }
  ngOnInit(): void {}
  callapi(){
    console.log("15", this.searchText)
    this.weatherapi.getLatandLong(this.searchText).subscribe(data => {
      this.getCitydetails(data);
      });
  }
  getCitydetails(data:any){
    this.weatherapi.getCityWeather(data).subscribe(reponse => {
      const wdata: any = reponse
      this.weather = wdata.weather[0].main
      this.temp =   Math.round((wdata.main['temp'] - 32) * 5 / 9);
    
    });
  }

}
