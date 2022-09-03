import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { ICase } from 'src/app/interfaces/dataCase';
import { TPrice } from './case.params';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

  json: ICase = {
    accessibility: 0,
    activity: '',
    key: '',
    link: '',
    participants: 0,
    price: 0,
    type: ''
  }

  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit(): void {
    
  }

  public getData() {  
    this.dataService.getCase().subscribe((response: ICase) => {
      console.log(this.json = response)
    })
  }

  public getDataPrice(type: TPrice) {
    this.dataService.getPrice(type).subscribe((response: ICase) => {
      this.json = response;
    })
  }

  public getDataParticipants(participants: string) {
    this.dataService.getParticipant(participants).subscribe((response: ICase) => {
      this.json = response;
    })
  }

}
