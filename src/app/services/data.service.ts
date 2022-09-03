import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICase } from '../interfaces/dataCase';
import { price, TPrice } from '../components/case/case.params';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor(private http: HttpClient) { 
    
  }

  public getCase(): Observable<ICase> {
    return this.http.get<ICase>('https://www.boredapi.com/api/activity/');
  }

  public getPrice(type: TPrice): Observable<ICase> {
    return this.http.get<ICase>('https://www.boredapi.com/api/activity?minprice=' + `${price[type].min}` + '&maxprice=' + `${price[type].max}`);
  }

  public getParticipant(participants: string): Observable<ICase> {
    return this.http.get<ICase>('https://www.boredapi.com/api/activity?participants=' + `${participants}`);
  }



}




