import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  json: any;

  constructor(private http: HttpClient) { 
    
  }

  public getCase() {
    this.http.get('http://www.boredapi.com/api/activity/').subscribe((response) => {
    this.json = response;
  });
}



}




