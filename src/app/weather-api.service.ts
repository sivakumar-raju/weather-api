import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
private appid = '1ee7d9e12f61dfbc0d506f68e8fbdbc4'
  constructor(private http: HttpClient) { }

  getLatandLong(cityName:any): Observable<any[]> {
    var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+cityName+'&limit=5&appid='+this.appid;
    return this.http.get<any[]>(apiUrl);
  };

  getCityWeather(data:any){
    let getCityApi = 'https://api.openweathermap.org/data/2.5/weather?lat='+data[0].lat+'&lon='+data[0].lon+'&appid='+this.appid;
    return this.http.get<any[]>(getCityApi);
  }

}
