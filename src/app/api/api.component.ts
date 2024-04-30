
import { Component, OnInit } from '@angular/core';

import { InformationService } from '../information.service';
import { PopUpService } from '../pop-up.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  savedData: any[];
   
  data : any=[]

  constructor(private service : InformationService, private popup : PopUpService, private http : HttpClient) { }

  ngOnInit(): void {
    this.TableDataInfo()
    this.getSavedData();
    this.getData()
    
  }
    TableDataInfo(){
    // this.data =  this.service.ApiInfo()
    // .subscribe((res)=>{
    //    this.data = res
    //    this.data = this.data.data.content
    //     // console.log(this.data,'service info')
    //  })
   

    const apiUrl = 'http://192.168.15.41:8086/WellService/api/v1/sesStatus/advanced_search?page=0&size=10';
    const newData = { "startDate":"2023-04-25","endDate":"2024-04-25" };
    const headers={ 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrcmlzaG5hIiwiYXV0aCI6IlRlc3RpbmdHcm91cCIsImlkIjoiNjQzZmQxNTM4NTRkMmYwZTE3MzFmMDFmIiwidXNlcm5hbWUiOiJrcmlzaG5hIiwiZW1haWxpZCI6InNya0BnbWFpbC5jb20iLCJleHAiOjE3MTQyOTc1NjV9.YfdevqntPON6jHnDEC3wTV_KBdfeyd9n3sZyDyCHCgYN_uRXI7cAIu1zprUIM1rHfmvt8HwrYXuhtO_Ckba0HQ'}
      // this.http.put<any>(apiUrl, newData, {headers})
    this.http.get<any>(apiUrl, {params : newData, headers : headers})
    .subscribe((response) => {
      console.log('put request....')
      this.data = response
      this.data = this.data.data.content
      console.log(this.data,'lllllll')
    })
    }
  onPopUp(){
    this.popup.openpopupmodify()
  }
  
  getSavedData(): void {
    this.service.ApiInfo()
    // .subscribe(
    //   data => {
    //     this.savedData = data;
    //     console.log('Saved data:', this.savedData);
    //   },
    //   error => {
    //     console.error('Error fetching saved data:', error);
    //   }
    // );
  }

  getData(): void {
    const url = 'http://192.168.15.41:8086/WellService/api/v1/sesStatus/advanced_search?page=0&size=10';
    const params = { "startDate":"2023-04-25","endDate":"2024-04-25" }; // URL parameters
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrcmlzaG5hIiwiYXV0aCI6IlRlc3RpbmdHcm91cCIsImlkIjoiNjQzZmQxNTM4NTRkMmYwZTE3MzFmMDFmIiwidXNlcm5hbWUiOiJrcmlzaG5hIiwiZW1haWxpZCI6InNya0BnbWFpbC5jb20iLCJleHAiOjE3MTQyOTc1NjV9.YfdevqntPON6jHnDEC3wTV_KBdfeyd9n3sZyDyCHCgYN_uRXI7cAIu1zprUIM1rHfmvt8HwrYXuhtO_Ckba0HQ' }; // Headers
    this.service.getData(url, params, headers).subscribe(
      response => {
        // Handle response data
        console.log('Response:', response);
      },
      error => {
        // Handle errors
        console.error('Error:', error);
      }
    );
  }

  }
