import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    
  }

  public getCase() {
    return this.http.get('https://www.boredapi.com/api/activity/');
  }

  public getLowPrice() {
    return this.http.get('https://www.boredapi.com/api/activity?minprice=0&maxprice=0.4');
  }

  public getAveragePrice() {
    return this.http.get('https://www.boredapi.com/api/activity?minprice=0.5&maxprice=0.7');
  }

  public getHighPrice() {
    return this.http.get('https://www.boredapi.com/api/activity?minprice=0.8&maxprice=1');
  }

  public getParticipant(participants: string) {
    return this.http.get('https://www.boredapi.com/api/activity?participants=' + `${participants}`);
  }



}




