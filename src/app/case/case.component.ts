import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

  case!: any;
  json!: any;

  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCase().subscribe((response) => {
      this.json = response;
    })
  }

  // public getJson() {
  //   this.DataService.getCase();
  // }

  // public getCase() {  
  //   this.http.get('https://www.boredapi.com/api/activity/').subscribe((response) => {
  //   this.json = response;
  // });
  // }

}
