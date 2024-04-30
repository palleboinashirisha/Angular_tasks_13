import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  data : any=[]

  constructor(private http : HttpClient) { }

 ApiInfo(){
    const apiUrl = 'http://192.168.15.41:8086/WellService/api/v1/sesStatus/advanced_search?page=0&size=10';
    const newData = { "startDate":"2023-04-25","endDate":"2024-04-25" };
    const headers={ 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrcmlzaG5hIiwiYXV0aCI6IlRlc3RpbmdHcm91cCIsImlkIjoiNjQzZmQxNTM4NTRkMmYwZTE3MzFmMDFmIiwidXNlcm5hbWUiOiJrcmlzaG5hIiwiZW1haWxpZCI6InNya0BnbWFpbC5jb20iLCJleHAiOjE3MTQyOTc1NjV9.YfdevqntPON6jHnDEC3wTV_KBdfeyd9n3sZyDyCHCgYN_uRXI7cAIu1zprUIM1rHfmvt8HwrYXuhtO_Ckba0HQ'}
   this.http.put<any>(apiUrl, newData, {headers})
  //  return this.http.get<any>(apiUrl, {params : newData, headers : headers})
    .subscribe((response) => {

      this.data = response
      this.data = this.data.data.content
      console.log(this.data,'lllllll')
    })
  }

//  Method to retrieve saved data
   // Method to save form data
   saveFormData(data: any) {
    let payload : {"sesNumber":string,"sr":number,"rpo":number,"contract":string,"invoice":string,"description":string,"serviceLocation":string,"costcenter":string,"amountexlvat":number,"vat":number,"total":number,"lessRetention":number,"arAfterRetention":number,"currency":string,"currentHolder":string,"currentHolderName":string,"submissionDt":"date","comments":string}
    const apiUrl = 'http://192.168.15.41:8086/WellService/api/v1/sesStatus';
    const headers={ 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrcmlzaG5hIiwiYXV0aCI6IlRlc3RpbmdHcm91cCIsImlkIjoiNjQzZmQxNTM4NTRkMmYwZTE3MzFmMDFmIiwidXNlcm5hbWUiOiJrcmlzaG5hIiwiZW1haWxpZCI6InNya0BnbWFpbC5jb20iLCJleHAiOjE3MTQyOTc1NjV9.YfdevqntPON6jHnDEC3wTV_KBdfeyd9n3sZyDyCHCgYN_uRXI7cAIu1zprUIM1rHfmvt8HwrYXuhtO_Ckba0HQ'}
    // this.http.post<any>(apiUrl, {headers}).subscribe((res)=>{
    return this.http.post<any>(apiUrl, payload, {headers});
  // })
   }


   getData(url: string, params: any, headers: any): Observable<any> {
    // Set up headers
    const httpHeaders = new HttpHeaders(headers);

    // Set up query parameters
    let httpParams = new HttpParams();
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.append(key, params[key]);
      }
    }

    // Make GET request with options
    return this.http.get<any>(url, { params: httpParams, headers: httpHeaders });
  }


}
