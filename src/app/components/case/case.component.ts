import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { ICase } from 'src/app/interfaces/dataCase';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

  json: any;

  // json: ICase = {
  //   accessibility: 0,
  //   activity: '',
  //   key: '',
  //   link: '',
  //   participants: 0,
  //   price: 0,
  //   type: ''
  // }

  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit(): void {
    
  }

  public getData() {  
    this.dataService.getCase().subscribe((response) => {
      this.json = response;
    })
  }

  public getDataLowPrice() {
    this.dataService.getLowPrice().subscribe((response) => {
      this.json = response;
    })
  }
  public getDataAveragePrice() {
    this.dataService.getAveragePrice().subscribe((response) => {
      this.json = response;
    })
  }
  public getDataHighPrice() {
    this.dataService.getHighPrice().subscribe((response) => {
      this.json = response;
    })
  }

  public getDataParticipants(participants: string) {
    this.dataService.getParticipant(participants).subscribe((response) => {
      this.json = response;
    })
  }

}
